import CommonUtils from '@bundle:com.huawei.multipledialog/entry/ets/common/utils/CommonUtils';
import CommonConstants from '@bundle:com.huawei.multipledialog/entry/ets/common/constants/CommonConstants';
import TextInputWidget from '@bundle:com.huawei.multipledialog/entry/ets/view/TextInputWidget';
import TextCommonWidget from '@bundle:com.huawei.multipledialog/entry/ets/view/TextCommonWidget';
import CustomDialogWidget from '@bundle:com.huawei.multipledialog/entry/ets/view/CustomDialogWidget';
import Logger from '@bundle:com.huawei.multipledialog/entry/ets/common/utils/Logger';
class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__birthdate = new ObservedPropertySimplePU('', this, "birthdate");
        this.__sex = new ObservedPropertySimplePU('', this, "sex");
        this.__hobbies = new ObservedPropertySimplePU('', this, "hobbies");
        this.sexArray = { "id": 16777282, "type": 10009, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" };
        this.customDialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new CustomDialogWidget(this, {
                    hobbies: this.__hobbies
                });
                jsDialog.setController(this.customDialogController);
                ViewPU.create(jsDialog);
            },
            alignment: DialogAlignment.Bottom,
            customStyle: true,
            offset: {
                dx: 0,
                dy: CommonConstants.DY_OFFSET
            }
        }, this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.birthdate !== undefined) {
            this.birthdate = params.birthdate;
        }
        if (params.sex !== undefined) {
            this.sex = params.sex;
        }
        if (params.hobbies !== undefined) {
            this.hobbies = params.hobbies;
        }
        if (params.sexArray !== undefined) {
            this.sexArray = params.sexArray;
        }
        if (params.customDialogController !== undefined) {
            this.customDialogController = params.customDialogController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__birthdate.purgeDependencyOnElmtId(rmElmtId);
        this.__sex.purgeDependencyOnElmtId(rmElmtId);
        this.__hobbies.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__birthdate.aboutToBeDeleted();
        this.__sex.aboutToBeDeleted();
        this.__hobbies.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get birthdate() {
        return this.__birthdate.get();
    }
    set birthdate(newValue) {
        this.__birthdate.set(newValue);
    }
    get sex() {
        return this.__sex.get();
    }
    set sex(newValue) {
        this.__sex.set(newValue);
    }
    get hobbies() {
        return this.__hobbies.get();
    }
    set hobbies(newValue) {
        this.__hobbies.set(newValue);
    }
    aboutToAppear() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + CommonConstants.PLUS_ONE;
        let day = date.getDate();
        this.birthdate = CommonUtils.getBirthDateValue(year, month, day);
        let context = getContext(this);
        if ((CommonUtils.isEmpty(context)) || (CommonUtils.isEmpty(context.resourceManager))) {
            Logger.error(CommonConstants.TAG_HOME, 'context or resourceManager is null');
            return;
        }
        let manager = context.resourceManager;
        manager.getStringValue({ "id": 16777224, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }.id, (error, sexValue) => {
            if (!CommonUtils.isEmpty(error)) {
                Logger.error(CommonConstants.TAG_HOME, 'error = ' + JSON.stringify(error));
            }
            else {
                this.sex = sexValue;
            }
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/HomePage.ets(70:5)");
            Column.backgroundColor({ "id": 16777284, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_WIDTH);
            Column.height(CommonConstants.FULL_HEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777294, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.debugLine("pages/HomePage.ets(71:7)");
            Image.width({ "id": 16777251, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.height({ "id": 16777251, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.alignSelf(ItemAlign.Start);
            Image.margin({
                left: CommonConstants.BACK_MARGIN_LEFT,
                top: CommonConstants.BACK_MARGIN_TOP
            });
            Image.onClick(() => {
                let context = getContext(this);
                CommonUtils.alertDialog(context);
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777218, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.debugLine("pages/HomePage.ets(83:7)");
            Image.width({ "id": 16777238, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.height({ "id": 16777238, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.alignSelf(ItemAlign.Center);
            Image.margin({ top: CommonConstants.AVATAR_MARGIN_TOP });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.debugLine("pages/HomePage.ets(88:7)");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 16777269, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.margin({ top: CommonConstants.PERSONAL_MARGIN_TOP });
            Text.alignSelf(ItemAlign.Center);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextInputWidget(this, {
                        inputImage: { "id": 16777219, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        hintText: { "id": 16777227, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextCommonWidget(this, {
                        textImage: { "id": 16777283, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        title: { "id": 16777231, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        content: this.__birthdate,
                        onItemClick: () => {
                            CommonUtils.datePickerDialog((birthValue) => {
                                this.birthdate = birthValue;
                            });
                        }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextCommonWidget(this, {
                        textImage: { "id": 16777234, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        title: { "id": 16777233, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        content: this.__sex,
                        onItemClick: () => {
                            CommonUtils.textPickerDialog(this.sexArray, (sexValue) => {
                                this.sex = sexValue;
                            });
                        }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextInputWidget(this, {
                        inputImage: { "id": 16777295, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        hintText: { "id": 16777228, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextCommonWidget(this, {
                        textImage: { "id": 16777291, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        title: { "id": 16777232, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                        content: this.__hobbies,
                        onItemClick: () => {
                            this.customDialogController.open();
                        }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new HomePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=HomePage.js.map