gdjs.Listlection8Code = {};
gdjs.Listlection8Code.localVariables = [];
gdjs.Listlection8Code.idToCallbackMap = new Map();
gdjs.Listlection8Code.GDNewSpriteObjects1= [];
gdjs.Listlection8Code.GDNewSpriteObjects2= [];
gdjs.Listlection8Code.GDLectionObjects1= [];
gdjs.Listlection8Code.GDLectionObjects2= [];
gdjs.Listlection8Code.GDcameraObjects1= [];
gdjs.Listlection8Code.GDcameraObjects2= [];
gdjs.Listlection8Code.GDCoinObjects1= [];
gdjs.Listlection8Code.GDCoinObjects2= [];
gdjs.Listlection8Code.GDHommeObjects1= [];
gdjs.Listlection8Code.GDHommeObjects2= [];
gdjs.Listlection8Code.GDHomeObjects1= [];
gdjs.Listlection8Code.GDHomeObjects2= [];
gdjs.Listlection8Code.GDLVLUPObjects1= [];
gdjs.Listlection8Code.GDLVLUPObjects2= [];


gdjs.Listlection8Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.Listlection8Code.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Listlection8Code.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.Listlection8Code.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Listlection8Code.GDHommeObjects1[k] = gdjs.Listlection8Code.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.Listlection8Code.GDHommeObjects1.length = k;
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

gdjs.Listlection8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Listlection8Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection8Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection8Code.GDLectionObjects1.length = 0;
gdjs.Listlection8Code.GDLectionObjects2.length = 0;
gdjs.Listlection8Code.GDcameraObjects1.length = 0;
gdjs.Listlection8Code.GDcameraObjects2.length = 0;
gdjs.Listlection8Code.GDCoinObjects1.length = 0;
gdjs.Listlection8Code.GDCoinObjects2.length = 0;
gdjs.Listlection8Code.GDHommeObjects1.length = 0;
gdjs.Listlection8Code.GDHommeObjects2.length = 0;
gdjs.Listlection8Code.GDHomeObjects1.length = 0;
gdjs.Listlection8Code.GDHomeObjects2.length = 0;
gdjs.Listlection8Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection8Code.GDLVLUPObjects2.length = 0;

gdjs.Listlection8Code.eventsList0(runtimeScene);
gdjs.Listlection8Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection8Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection8Code.GDLectionObjects1.length = 0;
gdjs.Listlection8Code.GDLectionObjects2.length = 0;
gdjs.Listlection8Code.GDcameraObjects1.length = 0;
gdjs.Listlection8Code.GDcameraObjects2.length = 0;
gdjs.Listlection8Code.GDCoinObjects1.length = 0;
gdjs.Listlection8Code.GDCoinObjects2.length = 0;
gdjs.Listlection8Code.GDHommeObjects1.length = 0;
gdjs.Listlection8Code.GDHommeObjects2.length = 0;
gdjs.Listlection8Code.GDHomeObjects1.length = 0;
gdjs.Listlection8Code.GDHomeObjects2.length = 0;
gdjs.Listlection8Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection8Code.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Listlection8Code'] = gdjs.Listlection8Code;
