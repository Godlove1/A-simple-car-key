let Lock = document.getElementById("lock");
let UnLock = document.getElementById("unlock");
let Gas = document.getElementById("gas");
let Light = document.getElementById("infrared");
let Info = document.getElementById("info-box");

Lock.onclick = function () {
	Light.style.backgroundColor = "red";
	Light.style.border = "none";
	Lock.style.borderColor = "cyan";
	Info.innerHTML = `Your Car is Now <span class="ad">locked</span>.`;

	Lock.ondblclick = function () {
		Lock.style.border = "1px solid teal";
		Light.style.background = "white";
		Light.style.border = "1px solid black";
		Info.innerHTML = `Your Car is in Free mode.Press <span class="ad">Key</span> to Restrict Acces `;
	}
}
UnLock.onclick = function () {
	Light.style.background = "rgb(16, 223, 16)";
	Light.style.border = "none";
	UnLock.style.borderColor = "cyan";
	Info.innerHTML = `Your Car is <span class="ad">Unlocked</span>.`;

	UnLock.ondblclick = function () {
		UnLock.style.border = "1px solid teal";
		Light.style.background = "white";
		Light.style.border = "1px solid black";
		Info.innerHTML = `Your Car is in Free mode.Press <span class="ad">Key</span> to Restrict Acces.`;
	}
}

Gas.onclick = function () {
	Light.style.background = "yellow";
	Light.style.border = "none";
	Gas.style.borderColor = "cyan";
	Info.innerHTML=`The <span class="ad">Gas</span> port is Open for Refill.`;

	Gas.ondblclick = function () {
		Gas.style.border = "1px solid teal";
		Light.style.background = "white";
		Light.style.border = "1px solid black";
		Info.innerHTML = `<p><span class="ad">Gas</span> port CLOSED.</p>Your Car is in Free mode.Press <span class="ad">Key</span> to Restrict Acces. `;
	}
}