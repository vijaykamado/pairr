
        const maleNames = ["JONNADA HARSHAVARDHAN ", "JONNALAGADDA GOPINATH", "KADA PRADEEP KUMAR", "KAKUNURI ABHINAY", "KALMARGU SATHVIK","KATEPAGA SURYA","KATRAVATH PAVAN","KATROTH ARUN","KEESARA HRUSHIKESH REDDY","KESAGANI YASHWANTH SAI","KODURU AKSHITH","KONAKATI SHIVA CHARAN","KONKIMALLA MANOJ","KONUGANTI SHIVA SHANKAR REDDY","KOPALLE INDHRA KUMARA ROHIT","CR PATEL","KORRA MAHESH","KOTHAKAPU BALAVARDHAN REDDY","KOTHAPALLY SHIVA","KOTTAM KRISHNA CHAITANYA","KOTTEMANU NIKHIL","KUMMARI AVANEESH","KUNTA DEEKSHITH REDDY","KYARAGARI RAJA VARDHAN","LAKKAKULA ABHINAY","MAHESH MAKAM","MALOTH JAGAN","MATAM GANESH","MATANGI SIDDHARTHA","MEKALA LOKESH","MEKALA SREESHANTH REDDY","MERUGU VIGNESH","MOHAMMAD KHAJA NAWAZ","MOHAMMAD KHAJA REHAN","RAIYAN","MOMULA SIDDARTHA GOUD","VIJAY","MUDDAM INDRA REDDY","NALLA CHARAN TEJ"];
        const femaleNames = ["JENIGA LAKSHMI PRASANNA", "K HASINI", "K SRIHINDU", "KADIGE VARSHHA", "KANDULA VARSHINI","KANUGULA HARSHIKA","KARAMCHEDU MANASVI","KARWAN VAISHNAVI REDDY","KASHA SRIJA","KATAM BHANU","KOTHA POOJA","KOTTUR ANUSHA","KOUDA HAMSIKA","KOVAI KEERTHANA","M AKHILA","MACHAVARAPU HARSHITHA","MADHU SATHVIKA","MAMIDI NAMITHA REDDY","MANNEM ANISHKA REDDY","MIDIDHIDI AASHRITHA","MORE VAISHNAVI","MRUDHULA GALI","MUDDANGULA SRIDEVI","MUDIGONDA NAVIYA","MULAKALAPALLI NIHARIKA"];

        function updateNameList() {
            const gender = document.getElementById("gender").value;
            const nameSelect = document.getElementById("name");
            nameSelect.innerHTML = ""; // Clear previous options
            if (gender === "male") {
                maleNames.forEach(name => {
                    const option = document.createElement("option");
                    option.value = name;
                    option.textContent = name;
                    nameSelect.appendChild(option);
                });
            } else if (gender === "female") {
                femaleNames.forEach(name => {
                    const option = document.createElement("option");
                    option.value = name;
                    option.textContent = name;
                    nameSelect.appendChild(option);
                });
            }
            document.getElementById("nameSelection").style.display = gender ? "block" : "none";
            document.getElementById("result").textContent = ""; // Clear previous result
        }

        function matchName() {
            const gender = document.getElementById("gender").value;
            const result = document.getElementById("result");
            if (gender === "male") {
                const randomFemale = femaleNames[Math.floor(Math.random() * femaleNames.length)];
                result.textContent = `Your Pair: ${randomFemale}`;
            } else if (gender === "female") {
                const randomMale = maleNames[Math.floor(Math.random() * maleNames.length)];
                result.textContent = `Your Pair: ${randomMale}`;
            }
        }