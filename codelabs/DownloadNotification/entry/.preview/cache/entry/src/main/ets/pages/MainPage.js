import notification from '@ohos:notificationManager';
import promptAction from '@ohos:promptAction';
import { createWantAgent, publishNotification, openNotificationPermission } from '@bundle:com.example.downloadnotification/entry/ets/common/utils/NotificationUtil';
import { getStringByRes } from '@bundle:com.example.downloadnotification/entry/ets/common/utils/ResourseUtil';
import Logger from '@bundle:com.example.downloadnotification/entry/ets/common/utils/Logger';
import CommonConstants, { DOWNLOAD_STATUS } from '@bundle:com.example.downloadnotification/entry/ets/common/constants/CommonConstants';
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__downloadStatus = new ObservedPropertySimplePU(DOWNLOAD_STATUS.INITIAL, this, "downloadStatus");
        this.__downloadProgress = new ObservedPropertySimplePU(0, this, "downloadProgress");
        this.context = getContext(this);
        this.isSupport = true;
        this.notificationTitle = '';
        this.wantAgentObj = new Object();
        this.interval = -1;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.downloadStatus !== undefined) {
            this.downloadStatus = params.downloadStatus;
        }
        if (params.downloadProgress !== undefined) {
            this.downloadProgress = params.downloadProgress;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.isSupport !== undefined) {
            this.isSupport = params.isSupport;
        }
        if (params.notificationTitle !== undefined) {
            this.notificationTitle = params.notificationTitle;
        }
        if (params.wantAgentObj !== undefined) {
            this.wantAgentObj = params.wantAgentObj;
        }
        if (params.interval !== undefined) {
            this.interval = params.interval;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__downloadStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__downloadProgress.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__downloadStatus.aboutToBeDeleted();
        this.__downloadProgress.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get downloadStatus() {
        return this.__downloadStatus.get();
    }
    set downloadStatus(newValue) {
        this.__downloadStatus.set(newValue);
    }
    get downloadProgress() {
        return this.__downloadProgress.get();
    }
    set downloadProgress(newValue) {
        this.__downloadProgress.set(newValue);
    }
    aboutToAppear() {
        openNotificationPermission();
        let bundleName = this.context.abilityInfo.bundleName;
        let abilityName = this.context.abilityInfo.name;
        createWantAgent(bundleName, abilityName).then(want => {
            this.wantAgentObj = want;
        }).catch((err) => {
            Logger.error(`getWantAgent fail, err: ${JSON.stringify(err)}`);
        });
        notification.isSupportTemplate('downloadTemplate').then(isSupport => {
            if (!isSupport) {
                promptAction.showToast({
                    message: { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }
                });
            }
            this.isSupport = isSupport;
        });
    }
    onBackPress() {
        this.cancel();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(60:5)");
            Column.width(CommonConstants.FULL_LENGTH);
            Column.height(CommonConstants.FULL_LENGTH);
            Column.backgroundColor({ "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Text.debugLine("pages/MainPage.ets(61:7)");
            Text.fontSize({ "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_LAGER);
            Text.width(CommonConstants.TITLE_WIDTH);
            Text.textAlign(TextAlign.Start);
            Text.margin({
                top: { "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" },
                bottom: { "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MainPage.ets(70:7)");
            Row.width(CommonConstants.CARD_WIDTH);
            Row.height({ "id": 16777245, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.borderRadius({ "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({ "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(71:9)");
            Column.layoutWeight(CommonConstants.IMAGE_WEIGHT);
            Column.height(CommonConstants.FULL_LENGTH);
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Image.debugLine("pages/MainPage.ets(72:11)");
            Image.objectFit(ImageFit.Fill);
            Image.width({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Image.height({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(81:9)");
            Column.layoutWeight(CommonConstants.CARD_CONTENT_WEIGHT);
            Column.height(CommonConstants.FULL_LENGTH);
            Column.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MainPage.ets(82:11)");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_LENGTH);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(CommonConstants.DOWNLOAD_FILE);
            Text.debugLine("pages/MainPage.ets(83:13)");
            Text.fontSize({ "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontWeight(CommonConstants.FONT_WEIGHT_LAGER);
            Text.lineHeight({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`${this.downloadProgress}%`);
            Text.debugLine("pages/MainPage.ets(88:13)");
            Text.fontSize({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Text.opacity(CommonConstants.FONT_OPACITY);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Progress.create({
                value: this.downloadProgress,
                total: CommonConstants.PROGRESS_TOTAL
            });
            Progress.debugLine("pages/MainPage.ets(96:11)");
            Progress.width(CommonConstants.FULL_LENGTH);
            if (!isInitialRender) {
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MainPage.ets(101:11)");
            Row.width(CommonConstants.FULL_LENGTH);
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(CommonConstants.FILE_SIZE);
            Text.debugLine("pages/MainPage.ets(102:13)");
            Text.fontSize({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Text.opacity(CommonConstants.FONT_OPACITY);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.downloadStatus === DOWNLOAD_STATUS.INITIAL) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.customButton.bind(this)({ "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, () => this.start());
                });
            }
            else if (this.downloadStatus === DOWNLOAD_STATUS.DOWNLOADING) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Row.create();
                        Row.debugLine("pages/MainPage.ets(109:15)");
                        if (!isInitialRender) {
                            Row.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.cancelButton.bind(this)();
                    this.customButton.bind(this)({ "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, () => this.pause());
                    Row.pop();
                });
            }
            else if (this.downloadStatus === DOWNLOAD_STATUS.PAUSE) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Row.create();
                        Row.debugLine("pages/MainPage.ets(114:15)");
                        if (!isInitialRender) {
                            Row.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.cancelButton.bind(this)();
                    this.customButton.bind(this)({ "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, () => this.resume());
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.customButton.bind(this)({ "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, () => this.open());
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        Column.pop();
    }
    /**
     * Start the timer and send notification.
     */
    download() {
        this.interval = setInterval(async () => {
            if (this.downloadProgress === CommonConstants.PROGRESS_TOTAL) {
                this.notificationTitle = await getStringByRes({ "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, this);
                this.downloadStatus = DOWNLOAD_STATUS.FINISHED;
                clearInterval(this.interval);
            }
            else {
                this.downloadProgress += CommonConstants.PROGRESS_SPEED;
            }
            if (this.isSupport) {
                publishNotification(this.downloadProgress, this.notificationTitle, this.wantAgentObj);
            }
        }, CommonConstants.UPDATE_FREQUENCY);
    }
    /**
     * Click to download.
     */
    async start() {
        this.notificationTitle = await getStringByRes({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, this);
        this.downloadStatus = DOWNLOAD_STATUS.DOWNLOADING;
        this.downloadProgress = 0;
        this.download();
    }
    /**
     * Click pause.
     */
    async pause() {
        this.notificationTitle = await getStringByRes({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, this);
        clearInterval(this.interval);
        this.downloadStatus = DOWNLOAD_STATUS.PAUSE;
        if (this.isSupport) {
            publishNotification(this.downloadProgress, this.notificationTitle, this.wantAgentObj);
        }
    }
    /**
     * Click resume.
     */
    async resume() {
        this.notificationTitle = await getStringByRes({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }, this);
        this.download();
        this.downloadStatus = DOWNLOAD_STATUS.DOWNLOADING;
    }
    /**
     * Click cancel.
     */
    async cancel() {
        this.downloadProgress = 0;
        clearInterval(this.interval);
        this.downloadStatus = DOWNLOAD_STATUS.INITIAL;
        notification.cancel(CommonConstants.NOTIFICATION_ID);
    }
    /**
     * Open file
     */
    open() {
        promptAction.showToast({
            message: { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" }
        });
    }
    customButton(textResource, click = () => {
    }, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(textResource);
            Button.debugLine("pages/MainPage.ets(212:5)");
            Button.backgroundColor({ "id": 16777218, "type": 10001, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            __Button__buttonStyle();
            Button.onClick(() => {
                click();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
    }
    cancelButton(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Button.debugLine("pages/MainPage.ets(222:5)");
            __Button__buttonStyle();
            Button.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Button.fontColor({ "id": 16777218, "type": 10001, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
            Button.margin({ right: { "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" } });
            Button.onClick(() => {
                this.cancel();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Button__buttonStyle() {
    Button.constraintSize({ minWidth: { "id": 16777243, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" } });
    Button.height({ "id": 16777241, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
    Button.borderRadius({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
    Button.fontSize({ "id": 16777240, "type": 10002, params: [], "bundleName": "com.example.downloadnotification", "moduleName": "entry" });
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MainPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MainPage.js.map