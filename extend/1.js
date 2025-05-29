let noCount = 0;

function openIntro() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
}

function yesToStep2() {
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

function noToMissMe() {
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('missMeStep').classList.remove('hidden');
}

function showPics() {
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('picsStep').classList.remove('hidden');
}

function noClicked() {
  noCount++;
  if (noCount < 3) {
    const yesBtn = document.getElementById('missYes') || document.getElementById('missYes2');
    const fontSize = 1 + 0.5 * noCount;
    yesBtn.style.fontSize = `${fontSize}rem`;
  } else {
    const missStep = document.getElementById('missMeStep') || document.getElementById('picsStep');
    const noBtn = document.getElementById('missNo') || document.getElementById('missNo2');
    noBtn.innerText = 'Mag bigay!';
    noBtn.onclick = showTulip;
  }
}

function goBack(previousStepId) {
  // Hide all steps
  const steps = ['intro', 'step1', 'missMeStep', 'tulipStep'];
  steps.forEach(step => document.getElementById(step).classList.add('hidden'));

  // Show the previous step
  document.getElementById(previousStepId).classList.remove('hidden');
}

function showTulip() {
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('picsStep').classList.add('hidden');
  document.getElementById('missMeStep').classList.add('hidden');
  document.getElementById('tulipStep').classList.remove('hidden');
}
