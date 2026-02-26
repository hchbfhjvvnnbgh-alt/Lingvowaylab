gdjs.Listlection9Code = {};
gdjs.Listlection9Code.localVariables = [];
gdjs.Listlection9Code.idToCallbackMap = new Map();
gdjs.Listlection9Code.GDNewSpriteObjects1= [];
gdjs.Listlection9Code.GDNewSpriteObjects2= [];
gdjs.Listlection9Code.GDLectionObjects1= [];
gdjs.Listlection9Code.GDLectionObjects2= [];
gdjs.Listlection9Code.GDcameraObjects1= [];
gdjs.Listlection9Code.GDcameraObjects2= [];
gdjs.Listlection9Code.GDCoinObjects1= [];
gdjs.Listlection9Code.GDCoinObjects2= [];
gdjs.Listlection9Code.GDHommeObjects1= [];
gdjs.Listlection9Code.GDHommeObjects2= [];
gdjs.Listlection9Code.GDHomeObjects1= [];
gdjs.Listlection9Code.GDHomeObjects2= [];
gdjs.Listlection9Code.GDLVLUPObjects1= [];
gdjs.Listlection9Code.GDLVLUPObjects2= [];


gdjs.Listlection9Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.Listlection9Code.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Listlection9Code.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.Listlection9Code.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Listlection9Code.GDHommeObjects1[k] = gdjs.Listlection9Code.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.Listlection9Code.GDHommeObjects1.length = k;
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

gdjs.Listlection9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Listlection9Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection9Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection9Code.GDLectionObjects1.length = 0;
gdjs.Listlection9Code.GDLectionObjects2.length = 0;
gdjs.Listlection9Code.GDcameraObjects1.length = 0;
gdjs.Listlection9Code.GDcameraObjects2.length = 0;
gdjs.Listlection9Code.GDCoinObjects1.length = 0;
gdjs.Listlection9Code.GDCoinObjects2.length = 0;
gdjs.Listlection9Code.GDHommeObjects1.length = 0;
gdjs.Listlection9Code.GDHommeObjects2.length = 0;
gdjs.Listlection9Code.GDHomeObjects1.length = 0;
gdjs.Listlection9Code.GDHomeObjects2.length = 0;
gdjs.Listlection9Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection9Code.GDLVLUPObjects2.length = 0;

gdjs.Listlection9Code.eventsList0(runtimeScene);
gdjs.Listlection9Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection9Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection9Code.GDLectionObjects1.length = 0;
gdjs.Listlection9Code.GDLectionObjects2.length = 0;
gdjs.Listlection9Code.GDcameraObjects1.length = 0;
gdjs.Listlection9Code.GDcameraObjects2.length = 0;
gdjs.Listlection9Code.GDCoinObjects1.length = 0;
gdjs.Listlection9Code.GDCoinObjects2.length = 0;
gdjs.Listlection9Code.GDHommeObjects1.length = 0;
gdjs.Listlection9Code.GDHommeObjects2.length = 0;
gdjs.Listlection9Code.GDHomeObjects1.length = 0;
gdjs.Listlection9Code.GDHomeObjects2.length = 0;
gdjs.Listlection9Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection9Code.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Listlection9Code'] = gdjs.Listlection9Code;
