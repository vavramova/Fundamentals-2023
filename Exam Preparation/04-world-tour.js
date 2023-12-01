function worldTour(arr) {
    let stops = arr.shift();
    let command = arr.shift();

    while (command != "Travel") {
        let tokens = command.split(':');
        let action = tokens.shift();

        if (action == "Add Stop") {
            let [idx, newStop] = tokens;
            idx = Number(idx);

            if (idx >= 0 && idx <= stops.length) {
                stops = stops.slice(0, idx) + newStop + stops.slice(idx);
            }

            console.log(stops);
        } else if (action == "Remove Stop") {
            let [startIdx, endIdx] = tokens;
            startIdx = Number(startIdx);
            endIdx = Number(endIdx) + 1;
            if (startIdx >= 0 && startIdx <= stops.length && endIdx >= 0 && endIdx <= stops.length) {
                let word = stops.slice(startIdx, endIdx);
                stops = stops.replace(word, '');
            }

            console.log(stops);
        } else {
            let [oldStr, newStr] = tokens;

            if (stops.includes(oldStr)) {
               stops = stops.split(oldStr).join(newStr);
            }

            console.log(stops);
        }

        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
