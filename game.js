 /*script-------*/
        /*-the variables first*/
        var f = 0;
        var g = 0;
        var h = 0;
        var i = 0;
        var j;
        var l = 0;
        l++;

        /*------random shuffles for each box*/
        var shuffles001 = Math.floor(Math.random() * 9);
        var shuffles002 = Math.floor(Math.random() * 9);
        var shuffles003 = Math.floor(Math.random() * 9);
        var shuffles004 = Math.floor(Math.random() * 9);
       
        message001.innerHTML = shuffles001;
        message002.innerHTML = shuffles002;
        message003.innerHTML = shuffles003;
        message004.innerHTML = shuffles004;
            
        /*---function submit*/
        function submit001() {
            var b = Number001.value;
            var c = Number002.value;
            var d = Number003.value;
            var e = Number004.value;
            attempts001.innerHTML = l++;
            if (b == shuffles001) {
                f = i;
            }
            else {
                f = 0;
            }
            
            if (c == shuffles002) {
                g = 1;
            }
                else {
                    g = 0;
                }
             
            if (d == shuffles003) {
                h = 1;
            }

            else {
                h = 0;
            }

            if (e == shuffles004) {
                i = 1;
            }

            else {
                i = 0;
            }

            var j = f + g + h + i;

            if (j ==0) {
                answer001.innerHTML = "None of the numbers is correct.";

            }

            if (j ==1) {
                answer001.innerHTML = "You have 1 number correct";

            }

            if (j == 2) {
                answer001.innerHTML = "You have 2 numbers correct";
            }

            if (j == 3) {
                answer001.innerHTML = "You have 3 numbers correct";
            }

            if (j == 4) {
                answer001.innerHTML = "congratulations! you have found all the correct numbers, after";
                retake001.innerHTML = "<button class=blue001 onclick=repeat001()>repeat</button>";
            }

        }

        function repeat001() {
            location.reload();
        }
           