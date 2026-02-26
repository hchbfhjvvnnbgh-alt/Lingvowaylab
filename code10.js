gdjs.Listlection7Code = {};
gdjs.Listlection7Code.localVariables = [];
gdjs.Listlection7Code.idToCallbackMap = new Map();
gdjs.Listlection7Code.GDNewSpriteObjects1= [];
gdjs.Listlection7Code.GDNewSpriteObjects2= [];
gdjs.Listlection7Code.GDLectionObjects1= [];
gdjs.Listlection7Code.GDLectionObjects2= [];
gdjs.Listlection7Code.GDcameraObjects1= [];
gdjs.Listlection7Code.GDcameraObjects2= [];
gdjs.Listlection7Code.GDCoinObjects1= [];
gdjs.Listlection7Code.GDCoinObjects2= [];
gdjs.Listlection7Code.GDHommeObjects1= [];
gdjs.Listlection7Code.GDHommeObjects2= [];
gdjs.Listlection7Code.GDHomeObjects1= [];
gdjs.Listlection7Code.GDHomeObjects2= [];
gdjs.Listlection7Code.GDLVLUPObjects1= [];
gdjs.Listlection7Code.GDLVLUPObjects2= [];


gdjs.Listlection7Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.Listlection7Code.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Listlection7Code.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.Listlection7Code.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Listlection7Code.GDHommeObjects1[k] = gdjs.Listlection7Code.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.Listlection7Code.GDHommeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > 1110;
if (isConditionTrue_0) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", "Left", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) <= 1110;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 1111, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 2600;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 2599, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Listlection7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Listlection7Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection7Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection7Code.GDLectionObjects1.length = 0;
gdjs.Listlection7Code.GDLectionObjects2.length = 0;
gdjs.Listlection7Code.GDcameraObjects1.length = 0;
gdjs.Listlection7Code.GDcameraObjects2.length = 0;
gdjs.Listlection7Code.GDCoinObjects1.length = 0;
gdjs.Listlection7Code.GDCoinObjects2.length = 0;
gdjs.Listlection7Code.GDHommeObjects1.length = 0;
gdjs.Listlection7Code.GDHommeObjects2.length = 0;
gdjs.Listlection7Code.GDHomeObjects1.length = 0;
gdjs.Listlection7Code.GDHomeObjects2.length = 0;
gdjs.Listlection7Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection7Code.GDLVLUPObjects2.length = 0;

gdjs.Listlection7Code.eventsList0(runtimeScene);
gdjs.Listlection7Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection7Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection7Code.GDLectionObjects1.length = 0;
gdjs.Listlection7Code.GDLectionObjects2.length = 0;
gdjs.Listlection7Code.GDcameraObjects1.length = 0;
gdjs.Listlection7Code.GDcameraObjects2.length = 0;
gdjs.Listlection7Code.GDCoinObjects1.length = 0;
gdjs.Listlection7Code.GDCoinObjects2.length = 0;
gdjs.Listlection7Code.GDHommeObjects1.length = 0;
gdjs.Listlection7Code.GDHommeObjects2.length = 0;
gdjs.Listlection7Code.GDHomeObjects1.length = 0;
gdjs.Listlection7Code.GDHomeObjects2.length = 0;
gdjs.Listlection7Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection7Code.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Listlection7Code'] = gdjs.Listlection7Code;
