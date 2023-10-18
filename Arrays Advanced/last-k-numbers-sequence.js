function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
    let sum = 0;
    for(let j = Math.max(0, current - k); j < current; j++){
        sum += seq[j];
    }
    seq.push(sum);
    }
    console.log(seq.join(' '));
   }

   sumLastKNumbersSequence(6, 3);