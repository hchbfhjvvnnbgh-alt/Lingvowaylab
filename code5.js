gdjs.Listlection2Code = {};
gdjs.Listlection2Code.localVariables = [];
gdjs.Listlection2Code.idToCallbackMap = new Map();
gdjs.Listlection2Code.GDNewSpriteObjects1= [];
gdjs.Listlection2Code.GDNewSpriteObjects2= [];
gdjs.Listlection2Code.GDLectionObjects1= [];
gdjs.Listlection2Code.GDLectionObjects2= [];
gdjs.Listlection2Code.GDcameraObjects1= [];
gdjs.Listlection2Code.GDcameraObjects2= [];
gdjs.Listlection2Code.GDCoinObjects1= [];
gdjs.Listlection2Code.GDCoinObjects2= [];
gdjs.Listlection2Code.GDHommeObjects1= [];
gdjs.Listlection2Code.GDHommeObjects2= [];
gdjs.Listlection2Code.GDHomeObjects1= [];
gdjs.Listlection2Code.GDHomeObjects2= [];
gdjs.Listlection2Code.GDLVLUPObjects1= [];
gdjs.Listlection2Code.GDLVLUPObjects2= [];


gdjs.Listlection2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.Listlection2Code.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Listlection2Code.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.Listlection2Code.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Listlection2Code.GDHommeObjects1[k] = gdjs.Listlection2Code.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.Listlection2Code.GDHommeObjects1.length = k;
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

gdjs.Listlection2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Listlection2Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection2Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection2Code.GDLectionObjects1.length = 0;
gdjs.Listlection2Code.GDLectionObjects2.length = 0;
gdjs.Listlection2Code.GDcameraObjects1.length = 0;
gdjs.Listlection2Code.GDcameraObjects2.length = 0;
gdjs.Listlection2Code.GDCoinObjects1.length = 0;
gdjs.Listlection2Code.GDCoinObjects2.length = 0;
gdjs.Listlection2Code.GDHommeObjects1.length = 0;
gdjs.Listlection2Code.GDHommeObjects2.length = 0;
gdjs.Listlection2Code.GDHomeObjects1.length = 0;
gdjs.Listlection2Code.GDHomeObjects2.length = 0;
gdjs.Listlection2Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection2Code.GDLVLUPObjects2.length = 0;

gdjs.Listlection2Code.eventsList0(runtimeScene);
gdjs.Listlection2Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection2Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection2Code.GDLectionObjects1.length = 0;
gdjs.Listlection2Code.GDLectionObjects2.length = 0;
gdjs.Listlection2Code.GDcameraObjects1.length = 0;
gdjs.Listlection2Code.GDcameraObjects2.length = 0;
gdjs.Listlection2Code.GDCoinObjects1.length = 0;
gdjs.Listlection2Code.GDCoinObjects2.length = 0;
gdjs.Listlection2Code.GDHommeObjects1.length = 0;
gdjs.Listlection2Code.GDHommeObjects2.length = 0;
gdjs.Listlection2Code.GDHomeObjects1.length = 0;
gdjs.Listlection2Code.GDHomeObjects2.length = 0;
gdjs.Listlection2Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection2Code.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Listlection2Code'] = gdjs.Listlection2Code;
