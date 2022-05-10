

function format(a) {
    if(data.settingsToggles[1]) {
        const standardPrefix = ['K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc']
        const standardReq = [D(1e3),D(1e6),D(1e9),D(1e12),D(1e15),D(1e18),D(1e21),D(1e24),D(1e27),D(1e30),D(1e33)]
        for(let i = standardReq.length-1; i > -1; i--) {
            if(i === standardReq.length-1 && (a.div(standardReq[i]).gte(1e3)))
                return formatSci(a)
            if(a.gte(standardReq[i]))
                return `${formatSci(a.divide(standardReq[i]))} ${standardPrefix[i]}`
            if(a.lt(standardReq[0]))
                return formatSci(a)
        }
    }
    else {
        return formatSci(a)
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function getRandomDecimal(min,max) {
    return Decimal.floor(D(Math.random()).times(max.sub(min))).plus(min)
}

function decimalRemainder(num1, num2) {
    if(num1.eq(0)){
           return D(0);
           }
    if(num2.eq(0)){
           return NaN;
    }


      var newNum1 = Decimal.abs(num1);
      var newNum2 = Decimal.abs(num2);

      var quot = newNum1.sub(Decimal.floor( newNum1.div(newNum2) ).times(newNum2));

      if(num1.lt(0)){
            return quot.times(-1);
      }
      else{
            return quot;
      }
}

function formatDate(a) {
    let d = new Date(a)
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function formatPrefix(a,b) {
    const prefixes = ['Kilo','Mega','Giga','Tera','Peta','Exa','Zetta','Yotta']
    let amts = [D(1e3),D(1e6),D(1e9),D(1e12),D(1e15),D(1e18),D(1e21),D(1e24)]
    let index = -1;
    for(let i = prefixes.length - 1; i > -1; i--) {
        if(a.divide(amts[i]).gte(D(1))) {
            index = i;
            break;
        }
    }
    if(index === -1) {
        return `${format(a)} ${b}`
    }
    else {
        return `${format(a.divide(amts[index]))} ${prefixes[index]}${b.toLowerCase()}`
    }
}