const inf = document.getElementById("magica");
        const ods = document.getElementById("ods");
        const info = document.getElementById("informação");
    
        inf.addEventListener("click", function() {
            if (info.style.display === "none") {
                info.style.display = "block";
                ods.style.width = "37vw";
                inf.style.transform = 'rotate(180deg)';
            } else {
                info.style.display = "none";
                ods.style.width = "13vw";
                inf.style.transform = 'rotate(0deg)';
            }
        });