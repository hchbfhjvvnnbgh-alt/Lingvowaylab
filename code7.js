gdjs.Listlection4Code = {};
gdjs.Listlection4Code.localVariables = [];
gdjs.Listlection4Code.idToCallbackMap = new Map();
gdjs.Listlection4Code.GDNewSpriteObjects1= [];
gdjs.Listlection4Code.GDNewSpriteObjects2= [];
gdjs.Listlection4Code.GDLectionObjects1= [];
gdjs.Listlection4Code.GDLectionObjects2= [];
gdjs.Listlection4Code.GDcameraObjects1= [];
gdjs.Listlection4Code.GDcameraObjects2= [];
gdjs.Listlection4Code.GDCoinObjects1= [];
gdjs.Listlection4Code.GDCoinObjects2= [];
gdjs.Listlection4Code.GDHommeObjects1= [];
gdjs.Listlection4Code.GDHommeObjects2= [];
gdjs.Listlection4Code.GDHomeObjects1= [];
gdjs.Listlection4Code.GDHomeObjects2= [];
gdjs.Listlection4Code.GDLVLUPObjects1= [];
gdjs.Listlection4Code.GDLVLUPObjects2= [];


gdjs.Listlection4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.Listlection4Code.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Listlection4Code.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.Listlection4Code.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Listlection4Code.GDHommeObjects1[k] = gdjs.Listlection4Code.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.Listlection4Code.GDHommeObjects1.length = k;
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

gdjs.Listlection4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Listlection4Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection4Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection4Code.GDLectionObjects1.length = 0;
gdjs.Listlection4Code.GDLectionObjects2.length = 0;
gdjs.Listlection4Code.GDcameraObjects1.length = 0;
gdjs.Listlection4Code.GDcameraObjects2.length = 0;
gdjs.Listlection4Code.GDCoinObjects1.length = 0;
gdjs.Listlection4Code.GDCoinObjects2.length = 0;
gdjs.Listlection4Code.GDHommeObjects1.length = 0;
gdjs.Listlection4Code.GDHommeObjects2.length = 0;
gdjs.Listlection4Code.GDHomeObjects1.length = 0;
gdjs.Listlection4Code.GDHomeObjects2.length = 0;
gdjs.Listlection4Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection4Code.GDLVLUPObjects2.length = 0;

gdjs.Listlection4Code.eventsList0(runtimeScene);
gdjs.Listlection4Code.GDNewSpriteObjects1.length = 0;
gdjs.Listlection4Code.GDNewSpriteObjects2.length = 0;
gdjs.Listlection4Code.GDLectionObjects1.length = 0;
gdjs.Listlection4Code.GDLectionObjects2.length = 0;
gdjs.Listlection4Code.GDcameraObjects1.length = 0;
gdjs.Listlection4Code.GDcameraObjects2.length = 0;
gdjs.Listlection4Code.GDCoinObjects1.length = 0;
gdjs.Listlection4Code.GDCoinObjects2.length = 0;
gdjs.Listlection4Code.GDHommeObjects1.length = 0;
gdjs.Listlection4Code.GDHommeObjects2.length = 0;
gdjs.Listlection4Code.GDHomeObjects1.length = 0;
gdjs.Listlection4Code.GDHomeObjects2.length = 0;
gdjs.Listlection4Code.GDLVLUPObjects1.length = 0;
gdjs.Listlection4Code.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Listlection4Code'] = gdjs.Listlection4Code;
