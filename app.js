const waist = document.querySelector(".waist");
const hip = document.querySelector(".hip");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");
const waistSelect = document.querySelector(".waistSelect");
const hipSelect = document.querySelector(".hipSelect");

let preValhip = "mm";
let preValWaist = "mm";




waistSelect.onchange = function () {
  if (waistSelect.value == "mm") {
    if (preValWaist == "cm") {
      waist.value = (waist.value * 10);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 1000);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 25.4);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 304.8);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 914.4);
    }
    preValWaist = "mm";
  } else if (waistSelect.value == "cm") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.1);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 100);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 2.54);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 30.48);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 91.44);
    }
    preValWaist = "cm";
  } else if (waistSelect.value == "m") {
    if (preValWaist == "mm") {
      waist.value = (waist.value / 1000);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value / 100);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 0.254);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 0.3048);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 0.9144);
    }
    preValWaist = "m";
  } else if (waistSelect.value == "in") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.0393701);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value * 0.393701);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 39.3701);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 12);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 36);
    }
    preValWaist = "in";
  } else if (waistSelect.value == "ft") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.00328084);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value * 0.0328084);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 3.28084);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 0.0833333);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 3);
    }
    preValWaist = "ft";
  } else if (waistSelect.value == "yd") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.00109361);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value * 0.0109361);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 1.09361);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 0.0277778);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 0.333333);
    }
    preValWaist = "yd";
  }
};

hipSelect.onchange = function () {
  if (hipSelect.value == "mm") {
    if (preValhip == "cm") {
      hip.value = (hip.value * 10);
    } else if (preValhip == "m") {
      hip.value = (hip.value * 1000);
    } else if (preValhip == "in") {
      hip.value = (hip.value * 25.4);
    } else if (preValhip == "ft") {
      hip.value = (hip.value * 304.8);
    } else if (preValhip == "yd") {
      hip.value = (hip.value * 914.4);
    }
    preValhip = "mm";
  } else if (hipSelect.value == "cm") {
    if (preValhip == "mm") {
      hip.value = (hip.value * 0.1);
    } else if (preValhip == "m") {
      hip.value = (hip.value * 100);
    } else if (preValhip == "in") {
      hip.value = (hip.value * 2.54);
    } else if (preValhip == "ft") {
      hip.value = (hip.value * 30.48);
    } else if (preValhip == "yd") {
      hip.value = (hip.value * 91.44);
    }
    preValhip = "cm";
  } else if (hipSelect.value == "m") {
    if (preValhip == "mm") {
      hip.value = (hip.value / 1000);
    } else if (preValhip == "cm") {
      hip.value = (hip.value / 100);
    } else if (preValhip == "in") {
      hip.value = (hip.value * 0.254);
    } else if (preValhip == "ft") {
      hip.value = (hip.value * 0.3048);
    } else if (preValhip == "yd") {
      hip.value = (hip.value * 0.9144);
    }
    preValhip = "m";
  } else if (hipSelect.value == "in") {
    if (preValhip == "mm") {
      hip.value = (hip.value * 0.0393701);
    } else if (preValhip == "cm") {
      hip.value = (hip.value * 0.393701);
    } else if (preValhip == "m") {
      hip.value = (hip.value * 39.3701);
    } else if (preValhip == "ft") {
      hip.value = (hip.value * 12);
    } else if (preValhip == "yd") {
      hip.value = (hip.value * 36);
    }
    preValhip = "in";
  } else if (hipSelect.value == "ft") {
    if (preValhip == "mm") {
      hip.value = (hip.value * 0.00328084);
    } else if (preValhip == "cm") {
      hip.value = (hip.value * 0.0328084);
    } else if (preValhip == "m") {
      hip.value = (hip.value * 3.28084);
    } else if (preValhip == "in") {
      hip.value = (hip.value * 0.0833333);
    } else if (preValhip == "yd") {
      hip.value = (hip.value * 3);
    }
    preValhip = "ft";
  } else if (hipSelect.value == "yd") {
    if (preValhip == "mm") {
      hip.value = (hip.value * 0.00109361);
    } else if (preValhip == "cm") {
      hip.value = (hip.value * 0.0109361);
    } else if (preValhip == "m") {
      hip.value = (hip.value * 1.09361);
    } else if (preValhip == "in") {
      hip.value = (hip.value * 0.0277778);
    } else if (preValhip == "ft") {
      hip.value = (hip.value * 0.333333);
    }
    preValhip = "yd";
  }
};


function calculateFunc() {
  if (waistSelect.value == "mm") {
    if (hipSelect.value == "mm") {
      return waist.value / hip.value;
    } else if (hipSelect.value == "cm") {
      return waist.value / (hip.value * 10);
    } else if (hipSelect.value == "m") {
    return waist.value / (hip.value * 1000);
  } else if (hipSelect.value == "in") {
    return waist.value / (hip.value * 25.4);
  } else if (hipSelect.value == "ft") {
    return waist.value / (hip.value * 304.8);
  } else if (hipSelect.value == "yd") {
    return waist.value / (hip.value * 914.4);
  }
}
  if (waistSelect.value == "cm") {
    if (hipSelect.value == "mm") {
      return (waist.value * 10) / hip.value;
    } else if (hipSelect.value == "cm") {
      return (waist.value * 10) / (hip.value * 10);
    } else if (hipSelect.value == "m") {
    return (waist.value * 10) / (hip.value * 1000);
  } else if (hipSelect.value == "in") {
    return (waist.value * 10) / (hip.value * 25.4);
  } else if (hipSelect.value == "ft") {
    return (waist.value * 10) / (hip.value * 304.8);
  } else if (hipSelect.value == "yd") {
    return (waist.value * 10) / (hip.value * 914.4);
  }
}
  if (waistSelect.value == "m") {
    if (hipSelect.value == "mm") {
      return (waist.value * 1000) / hip.value;
    } else if (hipSelect.value == "cm") {
      return (waist.value * 1000) / (hip.value * 10);
    } else if (hipSelect.value == "m") {
    return (waist.value * 1000) / (hip.value * 1000);
  } else if (hipSelect.value == "in") {
    return (waist.value * 1000) / (hip.value * 25.4);
  } else if (hipSelect.value == "ft") {
    return (waist.value * 1000) / (hip.value * 304.8);
  } else if (hipSelect.value == "yd") {
    return (waist.value * 1000) / (hip.value * 914.4);
  }
}
  if (waistSelect.value == "in") {
    if (hipSelect.value == "mm") {
      return (waist.value * 25.4) / hip.value;
    } else if (hipSelect.value == "cm") {
      return (waist.value * 25.4) / (hip.value * 10);
    } else if (hipSelect.value == "m") {
    return (waist.value * 25.4) / (hip.value * 1000);
  } else if (hipSelect.value == "in") {
    return (waist.value * 25.4) / (hip.value * 25.4);
  } else if (hipSelect.value == "ft") {
    return (waist.value * 25.4) / (hip.value * 304.8);
  } else if (hipSelect.value == "yd") {
    return (waist.value * 25.4) / (hip.value * 914.4);
  }
}
  if (waistSelect.value == "ft") {
    if (hipSelect.value == "mm") {
      return (waist.value * 304.8) / hip.value;
    } else if (hipSelect.value == "cm") {
      return (waist.value * 304.8) / (hip.value * 10);
    } else if (hipSelect.value == "m") {
    return (waist.value * 304.8) / (hip.value * 1000);
  } else if (hipSelect.value == "in") {
    return (waist.value * 304.8) / (hip.value * 25.4);
  } else if (hipSelect.value == "ft") {
    return (waist.value * 304.8) / (hip.value * 304.8);
  } else if (hipSelect.value == "yd") {
    return (waist.value * 304.8) / (hip.value * 914.4);
  }
}
  if (waistSelect.value == "yd") {
    if (hipSelect.value == "mm") {
      return (waist.value * 914.4) / hip.value;
    } else if (hipSelect.value == "cm") {
      return (waist.value * 914.4) / (hip.value * 10);
    } else if (hipSelect.value == "m") {
    return (waist.value * 914.4) / (hip.value * 1000);
  } else if (hipSelect.value == "in") {
    return (waist.value * 914.4) / (hip.value * 25.4);
  } else if (hipSelect.value == "ft") {
    return (waist.value * 914.4) / (hip.value * 304.8);
  } else if (hipSelect.value == "yd") {
    return (waist.value * 914.4) / (hip.value * 914.4);
  }
}
  // return waist.value / hip.value;
}

hip.addEventListener("keyup", function () {
  if (
    waist.value == 0 ||
    waist.value == "" ||
    hip.value == 0 ||
    hip.value == ""
  ) {
    result.innerText = "please enter a value other than zero or valid number";
  } else {
    result.innerText = calculateFunc().toFixed(2);
  }
});

waist.onkeyup = function () {
  if (
    waist.value == 0 ||
    waist.value == "" ||
    hip.value == 0 ||
    hip.value == ""
  ) {
    result.innerText = "please enter a value other than zero or valid number";
  } else {
    result.innerText = calculateFunc().toFixed(2);
  }
};
