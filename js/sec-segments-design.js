// Created by - Aye Chan Aung Thwin

function createSixtySecSegmentsDesign() {

    let smSegContainer = document.getElementById('sm-seg-container');

    for (let i=0; i<=60; i++) {
        let secSegDesign = document.createElement('div');
        secSegDesign.setAttribute('class', 'seg-design sm-seg');

        let smSegRot = document.createElement('div');
        smSegRot.setAttribute('class', 'sm-seg-rot sm-seg-rot-'+i);
        smSegRot.style.transform = 'rotate('+(i*6)+'deg)';
        smSegRot.appendChild(secSegDesign);
    
        smSegContainer.appendChild(smSegRot);
    }
}

createSixtySecSegmentsDesign();