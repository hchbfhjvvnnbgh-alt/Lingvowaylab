gdjs.Listlection13Code = {};
gdjs.Listlection13Code.localVariables = [];
gdjs.Listlection13Code.idToCallbackMap = new Map();
gdjs.Listlection13Code.GDNewSpriteObjects1= [];
gdjs.Listlection13Code.GDNewSpriteObjects2= [];
gdjs.Listlection13Code.GDLectionObjects1= [];
gdjs.Listlection13Code.GDLectionObjects2= [];
gdjs.Listlection13Code.GDcameraObjects1= [];
gdjs.Listlection13Code.GDcameraObjects2= [];
gdjs.Listlection13Code.GDCoinObjects1= [];
gdjs.Listlection13Code.GDCoinObjects2= [];
gdjs.Listlection13Code.GDHommeObjects1= [];
gdjs.Listlection13Code.GDHommeObjects2= [];
gdjs.Listlection13Code.GDHomeObjects1= [];
gdjs.Listlection13Code.GDHomeObjects2= [];
gdjs.Listlection13Code.GDLVLUPObjects1= [];
gdjs.Listlection13Code.GDLVLUPObjects2= [];


gdjs.Listlection13Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.Listlection13Code.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Listlection13Code.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.Listlection13Code.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Listlection13Code.GDHommeObjects1[k] = gdjs.Listlection13Code.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.Listlection13Code.GDHommeObjects1.length = k;
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

gdjs.Listlection13Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Listlection13Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection13Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection13Code.GDLectionObjects1.length = 0;
gdjs.Listlection13Code.GDLectionObjects2.length = 0;
gdjs.Listlection13Code.GDcameraObjects1.length = 0;
gdjs.Listlection13Code.GDcameraObjects2.length = 0;
gdjs.Listlection13Code.GDCoinObjects1.length = 0;
gdjs.Listlection13Code.GDCoinObjects2.length = 0;
gdjs.Listlection13Code.GDHommeObjects1.length = 0;
gdjs.Listlection13Code.GDHommeObjects2.length = 0;
gdjs.Listlection13Code.GDHomeObjects1.length = 0;
gdjs.Listlection13Code.GDHomeObjects2.length = 0;
gdjs.Listlection13Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection13Code.GDLVLUPObjects2.length = 0;

gdjs.Listlection13Code.eventsList0(runtimeScene);
gdjs.Listlection13Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection13Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection13Code.GDLectionObjects1.length = 0;
gdjs.Listlection13Code.GDLectionObjects2.length = 0;
gdjs.Listlection13Code.GDcameraObjects1.length = 0;
gdjs.Listlection13Code.GDcameraObjects2.length = 0;
gdjs.Listlection13Code.GDCoinObjects1.length = 0;
gdjs.Listlection13Code.GDCoinObjects2.length = 0;
gdjs.Listlection13Code.GDHommeObjects1.length = 0;
gdjs.Listlection13Code.GDHommeObjects2.length = 0;
gdjs.Listlection13Code.GDHomeObjects1.length = 0;
gdjs.Listlection13Code.GDHomeObjects2.length = 0;
gdjs.Listlection13Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection13Code.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Listlection13Code'] = gdjs.Listlection13Code;
