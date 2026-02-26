gdjs.Listlection12Code = {};
gdjs.Listlection12Code.localVariables = [];
gdjs.Listlection12Code.idToCallbackMap = new Map();
gdjs.Listlection12Code.GDNewSpriteObjects1= [];
gdjs.Listlection12Code.GDNewSpriteObjects2= [];
gdjs.Listlection12Code.GDLectionObjects1= [];
gdjs.Listlection12Code.GDLectionObjects2= [];
gdjs.Listlection12Code.GDcameraObjects1= [];
gdjs.Listlection12Code.GDcameraObjects2= [];
gdjs.Listlection12Code.GDCoinObjects1= [];
gdjs.Listlection12Code.GDCoinObjects2= [];
gdjs.Listlection12Code.GDHommeObjects1= [];
gdjs.Listlection12Code.GDHommeObjects2= [];
gdjs.Listlection12Code.GDHomeObjects1= [];
gdjs.Listlection12Code.GDHomeObjects2= [];
gdjs.Listlection12Code.GDLVLUPObjects1= [];
gdjs.Listlection12Code.GDLVLUPObjects2= [];


gdjs.Listlection12Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.Listlection12Code.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Listlection12Code.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.Listlection12Code.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Listlection12Code.GDHommeObjects1[k] = gdjs.Listlection12Code.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.Listlection12Code.GDHommeObjects1.length = k;
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

gdjs.Listlection12Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Listlection12Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection12Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection12Code.GDLectionObjects1.length = 0;
gdjs.Listlection12Code.GDLectionObjects2.length = 0;
gdjs.Listlection12Code.GDcameraObjects1.length = 0;
gdjs.Listlection12Code.GDcameraObjects2.length = 0;
gdjs.Listlection12Code.GDCoinObjects1.length = 0;
gdjs.Listlection12Code.GDCoinObjects2.length = 0;
gdjs.Listlection12Code.GDHommeObjects1.length = 0;
gdjs.Listlection12Code.GDHommeObjects2.length = 0;
gdjs.Listlection12Code.GDHomeObjects1.length = 0;
gdjs.Listlection12Code.GDHomeObjects2.length = 0;
gdjs.Listlection12Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection12Code.GDLVLUPObjects2.length = 0;

gdjs.Listlection12Code.eventsList0(runtimeScene);
gdjs.Listlection12Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection12Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection12Code.GDLectionObjects1.length = 0;
gdjs.Listlection12Code.GDLectionObjects2.length = 0;
gdjs.Listlection12Code.GDcameraObjects1.length = 0;
gdjs.Listlection12Code.GDcameraObjects2.length = 0;
gdjs.Listlection12Code.GDCoinObjects1.length = 0;
gdjs.Listlection12Code.GDCoinObjects2.length = 0;
gdjs.Listlection12Code.GDHommeObjects1.length = 0;
gdjs.Listlection12Code.GDHommeObjects2.length = 0;
gdjs.Listlection12Code.GDHomeObjects1.length = 0;
gdjs.Listlection12Code.GDHomeObjects2.length = 0;
gdjs.Listlection12Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection12Code.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Listlection12Code'] = gdjs.Listlection12Code;
