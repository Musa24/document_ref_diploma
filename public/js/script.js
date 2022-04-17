const groupsOKS = document.querySelectorAll('.groupOKS');
const groupSelect = document.querySelector('.groupSelect');
const subGroupSelect = document.querySelector('.subGroupSelect');
const subGroupGroupOKSSelect = document.querySelector(
  '.subGroupGroupOKS-select'
);

console.log(subGroupGroupOKSSelect);

// Subgroup
const subGroupsOKS = document.querySelectorAll('.subGroupOKS');

// subgroupGroup
const subGroupsGroupOKS = document.querySelectorAll('.subGroupGroupOKS');

// GROUP EVENT LISTENER
groupSelect.addEventListener('change', (e) => {
  // console.log(e.target.value);
  subGroupSelect[0].remove();
  const el = document.createElement('option');
  el.innerText = '--';
  subGroupSelect.prepend(el);

  for (let subGroupOKS of subGroupsOKS) {
    subGroupSelect[0].setAttribute('selected', true);
    const subGroup_id = subGroupOKS.getAttribute('data-subgroupOKS');
    if (subGroup_id === e.target.value) {
      subGroupOKS.classList.remove('hide');
    } else {
      subGroupSelect[0].setAttribute('selected', false);
      subGroupOKS.classList.add('hide');
    }
  }
});

// SUBGROUP EVENT LISTENER
subGroupSelect.addEventListener('change', (e) => {
  // data-subGroupGroupOKS
  subGroupGroupOKSSelect[0].remove();

  const el = document.createElement('option');
  el.innerText = '--';
  subGroupGroupOKSSelect.prepend(el);

  for (let subGroupGroupOKS of subGroupsGroupOKS) {
    subGroupGroupOKSSelect[0].setAttribute('selected', true);
    const subGroupGroup_id = subGroupGroupOKS.getAttribute(
      'data-subGroupGroupOKS'
    );
    if (subGroupGroup_id === e.target.value) {
      subGroupGroupOKS.classList.remove('hide');
    } else {
      subGroupGroupOKS.classList.add('hide');
    }
  }
});
