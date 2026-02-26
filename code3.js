gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.idToCallbackMap = new Map();
gdjs.SettingsCode.GDWallObjects1= [];
gdjs.SettingsCode.GDWallObjects2= [];
gdjs.SettingsCode.GDWallObjects3= [];
gdjs.SettingsCode.GDTranslate2Objects1= [];
gdjs.SettingsCode.GDTranslate2Objects2= [];
gdjs.SettingsCode.GDTranslate2Objects3= [];
gdjs.SettingsCode.GDSettingsObjects1= [];
gdjs.SettingsCode.GDSettingsObjects2= [];
gdjs.SettingsCode.GDSettingsObjects3= [];
gdjs.SettingsCode.GDSoundObjects1= [];
gdjs.SettingsCode.GDSoundObjects2= [];
gdjs.SettingsCode.GDSoundObjects3= [];
gdjs.SettingsCode.GDOnOffObjects1= [];
gdjs.SettingsCode.GDOnOffObjects2= [];
gdjs.SettingsCode.GDOnOffObjects3= [];
gdjs.SettingsCode.GDSpeech_9595SpeedObjects1= [];
gdjs.SettingsCode.GDSpeech_9595SpeedObjects2= [];
gdjs.SettingsCode.GDSpeech_9595SpeedObjects3= [];
gdjs.SettingsCode.GDSpeechSpeedtumbObjects1= [];
gdjs.SettingsCode.GDSpeechSpeedtumbObjects2= [];
gdjs.SettingsCode.GDSpeechSpeedtumbObjects3= [];
gdjs.SettingsCode.GDX1Objects1= [];
gdjs.SettingsCode.GDX1Objects2= [];
gdjs.SettingsCode.GDX1Objects3= [];
gdjs.SettingsCode.GDSoundvolumetumbObjects1= [];
gdjs.SettingsCode.GDSoundvolumetumbObjects2= [];
gdjs.SettingsCode.GDSoundvolumetumbObjects3= [];
gdjs.SettingsCode.GDSound_9595VolumeObjects1= [];
gdjs.SettingsCode.GDSound_9595VolumeObjects2= [];
gdjs.SettingsCode.GDSound_9595VolumeObjects3= [];
gdjs.SettingsCode.GDX100Objects1= [];
gdjs.SettingsCode.GDX100Objects2= [];
gdjs.SettingsCode.GDX100Objects3= [];
gdjs.SettingsCode.GDTranslateObjects1= [];
gdjs.SettingsCode.GDTranslateObjects2= [];
gdjs.SettingsCode.GDTranslateObjects3= [];
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects1= [];
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects2= [];
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects3= [];
gdjs.SettingsCode.GDEnglishObjects1= [];
gdjs.SettingsCode.GDEnglishObjects2= [];
gdjs.SettingsCode.GDEnglishObjects3= [];
gdjs.SettingsCode.GDcameraObjects1= [];
gdjs.SettingsCode.GDcameraObjects2= [];
gdjs.SettingsCode.GDcameraObjects3= [];
gdjs.SettingsCode.GDCoinObjects1= [];
gdjs.SettingsCode.GDCoinObjects2= [];
gdjs.SettingsCode.GDCoinObjects3= [];
gdjs.SettingsCode.GDHommeObjects1= [];
gdjs.SettingsCode.GDHommeObjects2= [];
gdjs.SettingsCode.GDHommeObjects3= [];
gdjs.SettingsCode.GDHomeObjects1= [];
gdjs.SettingsCode.GDHomeObjects2= [];
gdjs.SettingsCode.GDHomeObjects3= [];
gdjs.SettingsCode.GDLVLUPObjects1= [];
gdjs.SettingsCode.GDLVLUPObjects2= [];
gdjs.SettingsCode.GDLVLUPObjects3= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SpeechSpeedtumb"), gdjs.SettingsCode.GDSpeechSpeedtumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i].Value(null) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[k] = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("X1"), gdjs.SettingsCode.GDX1Objects2);
{for(var i = 0, len = gdjs.SettingsCode.GDX1Objects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDX1Objects2[i].getBehavior("Text").setText("X 1.00");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(4);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Volumespeed", "Volumespeed", runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volumespeed", "Volumespeed", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SpeechSpeedtumb"), gdjs.SettingsCode.GDSpeechSpeedtumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i].Value(null) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[k] = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("X1"), gdjs.SettingsCode.GDX1Objects2);
{for(var i = 0, len = gdjs.SettingsCode.GDX1Objects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDX1Objects2[i].getBehavior("Text").setText("X 0.75");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(3);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Volumespeed", "Volumespeed", runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volumespeed", "Volumespeed", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SpeechSpeedtumb"), gdjs.SettingsCode.GDSpeechSpeedtumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i].Value(null) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[k] = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("X1"), gdjs.SettingsCode.GDX1Objects2);
{for(var i = 0, len = gdjs.SettingsCode.GDX1Objects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDX1Objects2[i].getBehavior("Text").setText("X 0.50");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Volumespeed", "Volumespeed", runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volumespeed", "Volumespeed", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SpeechSpeedtumb"), gdjs.SettingsCode.GDSpeechSpeedtumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i].Value(null) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[k] = gdjs.SettingsCode.GDSpeechSpeedtumbObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("X1"), gdjs.SettingsCode.GDX1Objects2);
{for(var i = 0, len = gdjs.SettingsCode.GDX1Objects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDX1Objects2[i].getBehavior("Text").setText("X 0.25");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Volumespeed", "Volumespeed", runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volumespeed", "Volumespeed", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
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


};gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Soundvolumetumb"), gdjs.SettingsCode.GDSoundvolumetumbObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechSpeedtumb"), gdjs.SettingsCode.GDSpeechSpeedtumbObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("VolumeOnOff", "VolumeOnOff", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Language", "Language", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volumespeed", "Volumespeed", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volume", "Volume", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
{for(var i = 0, len = gdjs.SettingsCode.GDSoundvolumetumbObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundvolumetumbObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSpeechSpeedtumbObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSpeechSpeedtumbObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), null);
}
}
}

}


{


gdjs.SettingsCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21172628);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Soundvolumetumb"), gdjs.SettingsCode.GDSoundvolumetumbObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechSpeedtumb"), gdjs.SettingsCode.GDSpeechSpeedtumbObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSoundvolumetumbObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundvolumetumbObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSpeechSpeedtumbObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSpeechSpeedtumbObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Soundvolumetumb"), gdjs.SettingsCode.GDSoundvolumetumbObjects1);
gdjs.copyArray(runtimeScene.getObjects("X100"), gdjs.SettingsCode.GDX100Objects1);
{for(var i = 0, len = gdjs.SettingsCode.GDX100Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDX100Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.SettingsCode.GDSoundvolumetumbObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundvolumetumbObjects1[0].Value(null))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Homme"), gdjs.SettingsCode.GDHommeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDHommeObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDHommeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDHommeObjects1[k] = gdjs.SettingsCode.GDHommeObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDHommeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Soundvolumetumb"), gdjs.SettingsCode.GDSoundvolumetumbObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber((( gdjs.SettingsCode.GDSoundvolumetumbObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundvolumetumbObjects1[0].Value(null)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Volume", "Volume", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volume", "Volume", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Volumespeed", "Volumespeed", runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volumespeed", "Volumespeed", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Soundvolumetumb"), gdjs.SettingsCode.GDSoundvolumetumbObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSoundvolumetumbObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSoundvolumetumbObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSoundvolumetumbObjects1[k] = gdjs.SettingsCode.GDSoundvolumetumbObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSoundvolumetumbObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDSoundvolumetumbObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber((( gdjs.SettingsCode.GDSoundvolumetumbObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundvolumetumbObjects1[0].Value(null)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Volume", "Volume", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volume", "Volume", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OnOff"), gdjs.SettingsCode.GDOnOffObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDOnOffObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDOnOffObjects1[i].SetChecked(false, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OnOff"), gdjs.SettingsCode.GDOnOffObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDOnOffObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDOnOffObjects1[i].SetChecked(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Translate2"), gdjs.SettingsCode.GDTranslate2Objects1);
{for(var i = 0, len = gdjs.SettingsCode.GDTranslate2Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTranslate2Objects1[i].SetChecked(false, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Translate2"), gdjs.SettingsCode.GDTranslate2Objects1);
{for(var i = 0, len = gdjs.SettingsCode.GDTranslate2Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTranslate2Objects1[i].SetChecked(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnOff"), gdjs.SettingsCode.GDOnOffObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDOnOffObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDOnOffObjects1[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDOnOffObjects1[k] = gdjs.SettingsCode.GDOnOffObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDOnOffObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("VolumeOnOff", "VolumeOnOff", 0);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("VolumeOnOff", "VolumeOnOff", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Translate2"), gdjs.SettingsCode.GDTranslate2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDTranslate2Objects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDTranslate2Objects1[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDTranslate2Objects1[k] = gdjs.SettingsCode.GDTranslate2Objects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDTranslate2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Language", "Language", 0);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Language", "Language", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnOff"), gdjs.SettingsCode.GDOnOffObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDOnOffObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDOnOffObjects1[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDOnOffObjects1[k] = gdjs.SettingsCode.GDOnOffObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDOnOffObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("VolumeOnOff", "VolumeOnOff", 1);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("VolumeOnOff", "VolumeOnOff", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Translate2"), gdjs.SettingsCode.GDTranslate2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDTranslate2Objects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDTranslate2Objects1[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDTranslate2Objects1[k] = gdjs.SettingsCode.GDTranslate2Objects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDTranslate2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Language", "Language", 1);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Language", "Language", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.SettingsCode.GDSettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.SettingsCode.GDSoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound_Volume"), gdjs.SettingsCode.GDSound_9595VolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speech_Speed"), gdjs.SettingsCode.GDSpeech_9595SpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Translate"), gdjs.SettingsCode.GDTranslateObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSettingsObjects1[i].getBehavior("Text").setText("Settings");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundObjects1[i].getBehavior("Text").setText("Sound");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDTranslateObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTranslateObjects1[i].getBehavior("Text").setText("Translate");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSound_9595VolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSound_9595VolumeObjects1[i].getBehavior("Text").setText("Sound Volume");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSpeech_9595SpeedObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSpeech_9595SpeedObjects1[i].getBehavior("Text").setText("Speech Speed");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.SettingsCode.GDSettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.SettingsCode.GDSoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound_Volume"), gdjs.SettingsCode.GDSound_9595VolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speech_Speed"), gdjs.SettingsCode.GDSpeech_9595SpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Translate"), gdjs.SettingsCode.GDTranslateObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSettingsObjects1[i].getBehavior("Text").setText("Настройки");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundObjects1[i].getBehavior("Text").setText("Звук");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDTranslateObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTranslateObjects1[i].getBehavior("Text").setText("Перевод");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSound_9595VolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSound_9595VolumeObjects1[i].getBehavior("Text").setText("Громкость звука");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSpeech_9595SpeedObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSpeech_9595SpeedObjects1[i].getBehavior("Text").setText("Скорость Звука");
}
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


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDWallObjects1.length = 0;
gdjs.SettingsCode.GDWallObjects2.length = 0;
gdjs.SettingsCode.GDWallObjects3.length = 0;
gdjs.SettingsCode.GDTranslate2Objects1.length = 0;
gdjs.SettingsCode.GDTranslate2Objects2.length = 0;
gdjs.SettingsCode.GDTranslate2Objects3.length = 0;
gdjs.SettingsCode.GDSettingsObjects1.length = 0;
gdjs.SettingsCode.GDSettingsObjects2.length = 0;
gdjs.SettingsCode.GDSettingsObjects3.length = 0;
gdjs.SettingsCode.GDSoundObjects1.length = 0;
gdjs.SettingsCode.GDSoundObjects2.length = 0;
gdjs.SettingsCode.GDSoundObjects3.length = 0;
gdjs.SettingsCode.GDOnOffObjects1.length = 0;
gdjs.SettingsCode.GDOnOffObjects2.length = 0;
gdjs.SettingsCode.GDOnOffObjects3.length = 0;
gdjs.SettingsCode.GDSpeech_9595SpeedObjects1.length = 0;
gdjs.SettingsCode.GDSpeech_9595SpeedObjects2.length = 0;
gdjs.SettingsCode.GDSpeech_9595SpeedObjects3.length = 0;
gdjs.SettingsCode.GDSpeechSpeedtumbObjects1.length = 0;
gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length = 0;
gdjs.SettingsCode.GDSpeechSpeedtumbObjects3.length = 0;
gdjs.SettingsCode.GDX1Objects1.length = 0;
gdjs.SettingsCode.GDX1Objects2.length = 0;
gdjs.SettingsCode.GDX1Objects3.length = 0;
gdjs.SettingsCode.GDSoundvolumetumbObjects1.length = 0;
gdjs.SettingsCode.GDSoundvolumetumbObjects2.length = 0;
gdjs.SettingsCode.GDSoundvolumetumbObjects3.length = 0;
gdjs.SettingsCode.GDSound_9595VolumeObjects1.length = 0;
gdjs.SettingsCode.GDSound_9595VolumeObjects2.length = 0;
gdjs.SettingsCode.GDSound_9595VolumeObjects3.length = 0;
gdjs.SettingsCode.GDX100Objects1.length = 0;
gdjs.SettingsCode.GDX100Objects2.length = 0;
gdjs.SettingsCode.GDX100Objects3.length = 0;
gdjs.SettingsCode.GDTranslateObjects1.length = 0;
gdjs.SettingsCode.GDTranslateObjects2.length = 0;
gdjs.SettingsCode.GDTranslateObjects3.length = 0;
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects1.length = 0;
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects2.length = 0;
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects3.length = 0;
gdjs.SettingsCode.GDEnglishObjects1.length = 0;
gdjs.SettingsCode.GDEnglishObjects2.length = 0;
gdjs.SettingsCode.GDEnglishObjects3.length = 0;
gdjs.SettingsCode.GDcameraObjects1.length = 0;
gdjs.SettingsCode.GDcameraObjects2.length = 0;
gdjs.SettingsCode.GDcameraObjects3.length = 0;
gdjs.SettingsCode.GDCoinObjects1.length = 0;
gdjs.SettingsCode.GDCoinObjects2.length = 0;
gdjs.SettingsCode.GDCoinObjects3.length = 0;
gdjs.SettingsCode.GDHommeObjects1.length = 0;
gdjs.SettingsCode.GDHommeObjects2.length = 0;
gdjs.SettingsCode.GDHommeObjects3.length = 0;
gdjs.SettingsCode.GDHomeObjects1.length = 0;
gdjs.SettingsCode.GDHomeObjects2.length = 0;
gdjs.SettingsCode.GDHomeObjects3.length = 0;
gdjs.SettingsCode.GDLVLUPObjects1.length = 0;
gdjs.SettingsCode.GDLVLUPObjects2.length = 0;
gdjs.SettingsCode.GDLVLUPObjects3.length = 0;

gdjs.SettingsCode.eventsList1(runtimeScene);
gdjs.SettingsCode.GDWallObjects1.length = 0;
gdjs.SettingsCode.GDWallObjects2.length = 0;
gdjs.SettingsCode.GDWallObjects3.length = 0;
gdjs.SettingsCode.GDTranslate2Objects1.length = 0;
gdjs.SettingsCode.GDTranslate2Objects2.length = 0;
gdjs.SettingsCode.GDTranslate2Objects3.length = 0;
gdjs.SettingsCode.GDSettingsObjects1.length = 0;
gdjs.SettingsCode.GDSettingsObjects2.length = 0;
gdjs.SettingsCode.GDSettingsObjects3.length = 0;
gdjs.SettingsCode.GDSoundObjects1.length = 0;
gdjs.SettingsCode.GDSoundObjects2.length = 0;
gdjs.SettingsCode.GDSoundObjects3.length = 0;
gdjs.SettingsCode.GDOnOffObjects1.length = 0;
gdjs.SettingsCode.GDOnOffObjects2.length = 0;
gdjs.SettingsCode.GDOnOffObjects3.length = 0;
gdjs.SettingsCode.GDSpeech_9595SpeedObjects1.length = 0;
gdjs.SettingsCode.GDSpeech_9595SpeedObjects2.length = 0;
gdjs.SettingsCode.GDSpeech_9595SpeedObjects3.length = 0;
gdjs.SettingsCode.GDSpeechSpeedtumbObjects1.length = 0;
gdjs.SettingsCode.GDSpeechSpeedtumbObjects2.length = 0;
gdjs.SettingsCode.GDSpeechSpeedtumbObjects3.length = 0;
gdjs.SettingsCode.GDX1Objects1.length = 0;
gdjs.SettingsCode.GDX1Objects2.length = 0;
gdjs.SettingsCode.GDX1Objects3.length = 0;
gdjs.SettingsCode.GDSoundvolumetumbObjects1.length = 0;
gdjs.SettingsCode.GDSoundvolumetumbObjects2.length = 0;
gdjs.SettingsCode.GDSoundvolumetumbObjects3.length = 0;
gdjs.SettingsCode.GDSound_9595VolumeObjects1.length = 0;
gdjs.SettingsCode.GDSound_9595VolumeObjects2.length = 0;
gdjs.SettingsCode.GDSound_9595VolumeObjects3.length = 0;
gdjs.SettingsCode.GDX100Objects1.length = 0;
gdjs.SettingsCode.GDX100Objects2.length = 0;
gdjs.SettingsCode.GDX100Objects3.length = 0;
gdjs.SettingsCode.GDTranslateObjects1.length = 0;
gdjs.SettingsCode.GDTranslateObjects2.length = 0;
gdjs.SettingsCode.GDTranslateObjects3.length = 0;
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects1.length = 0;
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects2.length = 0;
gdjs.SettingsCode.GD_951056_951091_951089_951089_951082_951080_951081Objects3.length = 0;
gdjs.SettingsCode.GDEnglishObjects1.length = 0;
gdjs.SettingsCode.GDEnglishObjects2.length = 0;
gdjs.SettingsCode.GDEnglishObjects3.length = 0;
gdjs.SettingsCode.GDcameraObjects1.length = 0;
gdjs.SettingsCode.GDcameraObjects2.length = 0;
gdjs.SettingsCode.GDcameraObjects3.length = 0;
gdjs.SettingsCode.GDCoinObjects1.length = 0;
gdjs.SettingsCode.GDCoinObjects2.length = 0;
gdjs.SettingsCode.GDCoinObjects3.length = 0;
gdjs.SettingsCode.GDHommeObjects1.length = 0;
gdjs.SettingsCode.GDHommeObjects2.length = 0;
gdjs.SettingsCode.GDHommeObjects3.length = 0;
gdjs.SettingsCode.GDHomeObjects1.length = 0;
gdjs.SettingsCode.GDHomeObjects2.length = 0;
gdjs.SettingsCode.GDHomeObjects3.length = 0;
gdjs.SettingsCode.GDLVLUPObjects1.length = 0;
gdjs.SettingsCode.GDLVLUPObjects2.length = 0;
gdjs.SettingsCode.GDLVLUPObjects3.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
