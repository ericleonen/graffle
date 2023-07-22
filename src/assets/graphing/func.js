export const epsilon = 1e-10;

export const genPoints = (func) => {
    const points = [];
    let validPoints = 0;

    for (let x = -20; x <= 20; x += 0.01) {
        x = Math.round(x * 100) / 100;
        const point = [x];
        let y = func(x);

        if (isFinite(y)) {
            validPoints++
            point.push(y);
        }
        else {
            point.push(y);
            let newY = func(x + epsilon);

            if (!isFinite(newY)) {
                newY = func(x - epsilon);
            }

            point.push(newY);
        }
        
        points.push(point);
    }

    return validPoints > 0 ? points : [];
};

export const absRiemannDiff = (points1, points2) => {

    let sum = 0;

    points1 = [...points1];
    points2 = [...points2];

    for (let i = points1.length - 1; i > 0; i--) {
        const valid1 = isFinite(points1[i][1]) && !isNaN(points1[i][1]);
        const valid2 = isFinite(points2[i][1]) && !isNaN(points2[i][1]);

        if (valid1 !== valid2) 
            return 'Functions are incomparable, domains are different';
        else if (!valid1) {
            points1.splice(i, 1);
            points2.splice(i, 1);
        }
    }
  
    for (let i = 0; i < points1.length - 1; i++) {
      const dx = points1[i + 1][0] - points1[i][0];
      const dy = (points1[i][1] + points1[i + 1][1]) - (points2[i][1] + points2[i + 1][1]);
  
      sum += Math.abs(dy / 2) * dx;
    }
  
    return sum;
};