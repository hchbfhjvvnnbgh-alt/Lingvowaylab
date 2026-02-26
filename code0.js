gdjs.Start_32sceneCode = {};
gdjs.Start_32sceneCode.localVariables = [];
gdjs.Start_32sceneCode.idToCallbackMap = new Map();
gdjs.Start_32sceneCode.GDGrayWallObjects1= [];
gdjs.Start_32sceneCode.GDGrayWallObjects2= [];
gdjs.Start_32sceneCode.GDAppNameObjects1= [];
gdjs.Start_32sceneCode.GDAppNameObjects2= [];
gdjs.Start_32sceneCode.GDVersionObjects1= [];
gdjs.Start_32sceneCode.GDVersionObjects2= [];
gdjs.Start_32sceneCode.GDPlaybuttonObjects1= [];
gdjs.Start_32sceneCode.GDPlaybuttonObjects2= [];
gdjs.Start_32sceneCode.GDExitButtonObjects1= [];
gdjs.Start_32sceneCode.GDExitButtonObjects2= [];
gdjs.Start_32sceneCode.GDPlaylableObjects1= [];
gdjs.Start_32sceneCode.GDPlaylableObjects2= [];
gdjs.Start_32sceneCode.GDExitlableObjects1= [];
gdjs.Start_32sceneCode.GDExitlableObjects2= [];
gdjs.Start_32sceneCode.GDinfoObjects1= [];
gdjs.Start_32sceneCode.GDinfoObjects2= [];
gdjs.Start_32sceneCode.GDInfolableObjects1= [];
gdjs.Start_32sceneCode.GDInfolableObjects2= [];
gdjs.Start_32sceneCode.GDConfigObjects1= [];
gdjs.Start_32sceneCode.GDConfigObjects2= [];
gdjs.Start_32sceneCode.GDStarObjects1= [];
gdjs.Start_32sceneCode.GDStarObjects2= [];
gdjs.Start_32sceneCode.GDCoinnumObjects1= [];
gdjs.Start_32sceneCode.GDCoinnumObjects2= [];
gdjs.Start_32sceneCode.GDachievemenbuttonObjects1= [];
gdjs.Start_32sceneCode.GDachievemenbuttonObjects2= [];
gdjs.Start_32sceneCode.GDLVLUPnumObjects1= [];
gdjs.Start_32sceneCode.GDLVLUPnumObjects2= [];
gdjs.Start_32sceneCode.GDsettingsuttonObjects1= [];
gdjs.Start_32sceneCode.GDsettingsuttonObjects2= [];
gdjs.Start_32sceneCode.GDachievementsbuttonObjects1= [];
gdjs.Start_32sceneCode.GDachievementsbuttonObjects2= [];
gdjs.Start_32sceneCode.GDSettingsbuttonObjects1= [];
gdjs.Start_32sceneCode.GDSettingsbuttonObjects2= [];
gdjs.Start_32sceneCode.GDcameraObjects1= [];
gdjs.Start_32sceneCode.GDcameraObjects2= [];
gdjs.Start_32sceneCode.GDCoinObjects1= [];
gdjs.Start_32sceneCode.GDCoinObjects2= [];
gdjs.Start_32sceneCode.GDHommeObjects1= [];
gdjs.Start_32sceneCode.GDHommeObjects2= [];
gdjs.Start_32sceneCode.GDHomeObjects1= [];
gdjs.Start_32sceneCode.GDHomeObjects2= [];
gdjs.Start_32sceneCode.GDLVLUPObjects1= [];
gdjs.Start_32sceneCode.GDLVLUPObjects2= [];


gdjs.Start_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Coin", "Coin", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("LVL", "LVL", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("VolumeOnOff", "VolumeOnOff", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volumespeed", "Volumespeed", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Volume", "Volume", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Language", "Language", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hellblade_-_PROPIONATE_80649245.mp3", true, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hellblade_-_PROPIONATE_80649245.mp3", true, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 0.75);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hellblade_-_PROPIONATE_80649245.mp3", true, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 0.5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hellblade_-_PROPIONATE_80649245.mp3", true, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 0.25);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coinnum"), gdjs.Start_32sceneCode.GDCoinnumObjects1);
gdjs.copyArray(runtimeScene.getObjects("LVLUPnum"), gdjs.Start_32sceneCode.GDLVLUPnumObjects1);
{for(var i = 0, len = gdjs.Start_32sceneCode.GDCoinnumObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDCoinnumObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDLVLUPnumObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDLVLUPnumObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("achievemenbutton"), gdjs.Start_32sceneCode.GDachievemenbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDachievemenbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDachievemenbuttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32sceneCode.GDachievemenbuttonObjects1[k] = gdjs.Start_32sceneCode.GDachievemenbuttonObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDachievemenbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AWARDS", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settingsbutton"), gdjs.Start_32sceneCode.GDSettingsbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDSettingsbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDSettingsbuttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32sceneCode.GDSettingsbuttonObjects1[k] = gdjs.Start_32sceneCode.GDSettingsbuttonObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDSettingsbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
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

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.Start_32sceneCode.GDExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDExitButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32sceneCode.GDExitButtonObjects1[k] = gdjs.Start_32sceneCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDExitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.Start_32sceneCode.GDinfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDinfoObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDinfoObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32sceneCode.GDinfoObjects1[k] = gdjs.Start_32sceneCode.GDinfoObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDinfoObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playbutton"), gdjs.Start_32sceneCode.GDPlaybuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDPlaybuttonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDPlaybuttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32sceneCode.GDPlaybuttonObjects1[k] = gdjs.Start_32sceneCode.GDPlaybuttonObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDPlaybuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exitlable"), gdjs.Start_32sceneCode.GDExitlableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Infolable"), gdjs.Start_32sceneCode.GDInfolableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playlable"), gdjs.Start_32sceneCode.GDPlaylableObjects1);
gdjs.copyArray(runtimeScene.getObjects("achievementsbutton"), gdjs.Start_32sceneCode.GDachievementsbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("settingsutton"), gdjs.Start_32sceneCode.GDsettingsuttonObjects1);
{for(var i = 0, len = gdjs.Start_32sceneCode.GDachievementsbuttonObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDachievementsbuttonObjects1[i].getBehavior("Text").setText("achievements");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDsettingsuttonObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDsettingsuttonObjects1[i].getBehavior("Text").setText("Settings");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDInfolableObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDInfolableObjects1[i].getBehavior("Text").setText("Info");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDExitlableObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDExitlableObjects1[i].getBehavior("Text").setText("Exit");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDPlaylableObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDPlaylableObjects1[i].getBehavior("Text").setText("Play");
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
gdjs.copyArray(runtimeScene.getObjects("Exitlable"), gdjs.Start_32sceneCode.GDExitlableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Infolable"), gdjs.Start_32sceneCode.GDInfolableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playlable"), gdjs.Start_32sceneCode.GDPlaylableObjects1);
gdjs.copyArray(runtimeScene.getObjects("achievementsbutton"), gdjs.Start_32sceneCode.GDachievementsbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("settingsutton"), gdjs.Start_32sceneCode.GDsettingsuttonObjects1);
{for(var i = 0, len = gdjs.Start_32sceneCode.GDachievementsbuttonObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDachievementsbuttonObjects1[i].getBehavior("Text").setText("Достижения");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDsettingsuttonObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDsettingsuttonObjects1[i].getBehavior("Text").setText("Настрйоки");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDInfolableObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDInfolableObjects1[i].getBehavior("Text").setText("Инфа");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDExitlableObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDExitlableObjects1[i].getBehavior("Text").setText("Выход");
}
}
{for(var i = 0, len = gdjs.Start_32sceneCode.GDPlaylableObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDPlaylableObjects1[i].getBehavior("Text").setText("Играть");
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

gdjs.Start_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32sceneCode.GDGrayWallObjects1.length = 0;
gdjs.Start_32sceneCode.GDGrayWallObjects2.length = 0;
gdjs.Start_32sceneCode.GDAppNameObjects1.length = 0;
gdjs.Start_32sceneCode.GDAppNameObjects2.length = 0;
gdjs.Start_32sceneCode.GDVersionObjects1.length = 0;
gdjs.Start_32sceneCode.GDVersionObjects2.length = 0;
gdjs.Start_32sceneCode.GDPlaybuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDPlaybuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDExitButtonObjects1.length = 0;
gdjs.Start_32sceneCode.GDExitButtonObjects2.length = 0;
gdjs.Start_32sceneCode.GDPlaylableObjects1.length = 0;
gdjs.Start_32sceneCode.GDPlaylableObjects2.length = 0;
gdjs.Start_32sceneCode.GDExitlableObjects1.length = 0;
gdjs.Start_32sceneCode.GDExitlableObjects2.length = 0;
gdjs.Start_32sceneCode.GDinfoObjects1.length = 0;
gdjs.Start_32sceneCode.GDinfoObjects2.length = 0;
gdjs.Start_32sceneCode.GDInfolableObjects1.length = 0;
gdjs.Start_32sceneCode.GDInfolableObjects2.length = 0;
gdjs.Start_32sceneCode.GDConfigObjects1.length = 0;
gdjs.Start_32sceneCode.GDConfigObjects2.length = 0;
gdjs.Start_32sceneCode.GDStarObjects1.length = 0;
gdjs.Start_32sceneCode.GDStarObjects2.length = 0;
gdjs.Start_32sceneCode.GDCoinnumObjects1.length = 0;
gdjs.Start_32sceneCode.GDCoinnumObjects2.length = 0;
gdjs.Start_32sceneCode.GDachievemenbuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDachievemenbuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDLVLUPnumObjects1.length = 0;
gdjs.Start_32sceneCode.GDLVLUPnumObjects2.length = 0;
gdjs.Start_32sceneCode.GDsettingsuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDsettingsuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDachievementsbuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDachievementsbuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDSettingsbuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDSettingsbuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDcameraObjects1.length = 0;
gdjs.Start_32sceneCode.GDcameraObjects2.length = 0;
gdjs.Start_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Start_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Start_32sceneCode.GDHommeObjects1.length = 0;
gdjs.Start_32sceneCode.GDHommeObjects2.length = 0;
gdjs.Start_32sceneCode.GDHomeObjects1.length = 0;
gdjs.Start_32sceneCode.GDHomeObjects2.length = 0;
gdjs.Start_32sceneCode.GDLVLUPObjects1.length = 0;
gdjs.Start_32sceneCode.GDLVLUPObjects2.length = 0;

gdjs.Start_32sceneCode.eventsList0(runtimeScene);
gdjs.Start_32sceneCode.GDGrayWallObjects1.length = 0;
gdjs.Start_32sceneCode.GDGrayWallObjects2.length = 0;
gdjs.Start_32sceneCode.GDAppNameObjects1.length = 0;
gdjs.Start_32sceneCode.GDAppNameObjects2.length = 0;
gdjs.Start_32sceneCode.GDVersionObjects1.length = 0;
gdjs.Start_32sceneCode.GDVersionObjects2.length = 0;
gdjs.Start_32sceneCode.GDPlaybuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDPlaybuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDExitButtonObjects1.length = 0;
gdjs.Start_32sceneCode.GDExitButtonObjects2.length = 0;
gdjs.Start_32sceneCode.GDPlaylableObjects1.length = 0;
gdjs.Start_32sceneCode.GDPlaylableObjects2.length = 0;
gdjs.Start_32sceneCode.GDExitlableObjects1.length = 0;
gdjs.Start_32sceneCode.GDExitlableObjects2.length = 0;
gdjs.Start_32sceneCode.GDinfoObjects1.length = 0;
gdjs.Start_32sceneCode.GDinfoObjects2.length = 0;
gdjs.Start_32sceneCode.GDInfolableObjects1.length = 0;
gdjs.Start_32sceneCode.GDInfolableObjects2.length = 0;
gdjs.Start_32sceneCode.GDConfigObjects1.length = 0;
gdjs.Start_32sceneCode.GDConfigObjects2.length = 0;
gdjs.Start_32sceneCode.GDStarObjects1.length = 0;
gdjs.Start_32sceneCode.GDStarObjects2.length = 0;
gdjs.Start_32sceneCode.GDCoinnumObjects1.length = 0;
gdjs.Start_32sceneCode.GDCoinnumObjects2.length = 0;
gdjs.Start_32sceneCode.GDachievemenbuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDachievemenbuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDLVLUPnumObjects1.length = 0;
gdjs.Start_32sceneCode.GDLVLUPnumObjects2.length = 0;
gdjs.Start_32sceneCode.GDsettingsuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDsettingsuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDachievementsbuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDachievementsbuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDSettingsbuttonObjects1.length = 0;
gdjs.Start_32sceneCode.GDSettingsbuttonObjects2.length = 0;
gdjs.Start_32sceneCode.GDcameraObjects1.length = 0;
gdjs.Start_32sceneCode.GDcameraObjects2.length = 0;
gdjs.Start_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Start_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Start_32sceneCode.GDHommeObjects1.length = 0;
gdjs.Start_32sceneCode.GDHommeObjects2.length = 0;
gdjs.Start_32sceneCode.GDHomeObjects1.length = 0;
gdjs.Start_32sceneCode.GDHomeObjects2.length = 0;
gdjs.Start_32sceneCode.GDLVLUPObjects1.length = 0;
gdjs.Start_32sceneCode.GDLVLUPObjects2.length = 0;


return;

}

gdjs['Start_32sceneCode'] = gdjs.Start_32sceneCode;
