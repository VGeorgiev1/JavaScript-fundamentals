function figure(n) {
    if(n==2){
        console.log("+++");

    }
    else {
        let firstrow = "";
        for (let i = 0; i <= 2 * (n - 1); i++) {
            if (i == 0 || i == n - 1 || i == 2 * (n - 1)) {
                firstrow += "+";
            }
            else {
                firstrow += "-";
            }

        }
        console.log(firstrow);

        if (n % 2 == 0) {
            let row = "";

            for (let i = 1; i <= (n - 1) - 2; i++) {
                if (i != Math.ceil(((n - 3) / 2))) {
                    for (let j = 0; j <= 2 * (n - 1); j++) {

                        if (j == 0 || j == n - 1 || j == 2 * (n - 1)) {
                            row += "|";

                        }
                        else {
                            row += " ";
                        }

                    }
                    console.log(row);
                }
                else {
                    for (let j = 0; j <= 2 * (n - 1); j++) {
                        if (j == 0 || j == n - 1 || j == 2 * (n - 1)) {
                            row += "+";

                        }
                        else {
                            row += "-";
                        }

                    }
                    console.log(row);
                }

                row = "";

            }
        }
        else {
            let row = "";

            for (let i = 1; i <= n - 2; i++) {
                if (i != Math.ceil(Math.floor(n / 2))) {
                    for (let j = 0; j <= 2 * (n - 1); j++) {

                        if (j == 0 || j == n - 1 || j == 2 * (n - 1)) {
                            row += "|";

                        }
                        else {
                            row += " ";
                        }

                    }
                    console.log(row);
                }
                else {
                    for (let j = 0; j <= 2 * (n - 1); j++) {
                        if (j == 0 || j == n - 1 || j == 2 * (n - 1)) {
                            row += "+";

                        }
                        else {
                            row += "-";
                        }

                    }
                    console.log(row);
                }

                row = "";

            }


        }
        let lastrow = "";
        for (let i = 0; i <= 2 * (n - 1); i++) {
            if (i == 0 || i == n - 1 || i == 2 * (n - 1)) {
                lastrow += "+";
            }
            else {
                lastrow += "-";
            }

        }
        console.log(lastrow);
    }


}
figure(2);