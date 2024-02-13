/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Logger from '@bundle:com.huawei.multipledialog/entry/ets/common/utils/Logger';
import HobbyItem from '@bundle:com.huawei.multipledialog/entry/ets/viewmodel/HobbyItem';
import CommonUtils from '@bundle:com.huawei.multipledialog/entry/ets/common/utils/CommonUtils';
import CommonConstants from '@bundle:com.huawei.multipledialog/entry/ets/common/constants/CommonConstants';
export default class CustomDialogWidget extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__hobbyItems = new ObservedPropertyObjectPU([], this, "hobbyItems");
        this.__hobbies = new SynchedPropertySimpleTwoWayPU(params.hobbies, this, "hobbies");
        this.controller = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.hobbyItems !== undefined) {
            this.hobbyItems = params.hobbyItems;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__hobbyItems.purgeDependencyOnElmtId(rmElmtId);
        this.__hobbies.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__hobbyItems.aboutToBeDeleted();
        this.__hobbies.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get hobbyItems() {
        return this.__hobbyItems.get();
    }
    set hobbyItems(newValue) {
        this.__hobbyItems.set(newValue);
    }
    get hobbies() {
        return this.__hobbies.get();
    }
    set hobbies(newValue) {
        this.__hobbies.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    aboutToAppear() {
        let context = getContext(this);
        if (CommonUtils.isEmpty(context) || CommonUtils.isEmpty(context.resourceManager)) {
            Logger.error(CommonConstants.TAG_CUSTOM, 'context or resourceManager is null');
            return;
        }
        let manager = context.resourceManager;
        manager.getStringArrayValue({ "id": 16777281, "type": 10009, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }.id, (error, hobbyArray) => {
            if (!CommonUtils.isEmpty(error)) {
                Logger.error(CommonConstants.TAG_CUSTOM, 'error = ' + JSON.stringify(error));
            }
            else {
                hobbyArray.forEach((hobby) => {
                    let hobbyItem = new HobbyItem();
                    hobbyItem.label = hobby;
                    hobbyItem.isChecked = false;
                    this.hobbyItems.push(hobbyItem);
                });
            }
        });
    }
    /**
     * Set hobbies value
     *
     * @param {HobbyItem[]} hobby item array
     */
    setHobbiesValue(hobbyItems) {
        if (CommonUtils.isEmptyArr(hobbyItems)) {
            Logger.error(CommonConstants.TAG_HOME, 'hobbyItems length is 0');
            return;
        }
        let hobbiesText = '';
        hobbiesText = hobbyItems.filter((isCheckItem) => isCheckItem === null || isCheckItem === void 0 ? void 0 : isCheckItem.isChecked)
            .map((checkedItem) => {
            return checkedItem.label;
        })
            .join(CommonConstants.COMMA);
        if (hobbiesText.length > 0) {
            this.hobbies = hobbiesText;
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/CustomDialogWidget.ets(70:5)");
            Column.width(CommonConstants.COMMON_DIALOG_WIDTH);
            Column.padding({
                top: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                bottom: { "id": 16777246, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
            });
            Column.borderRadius({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.debugLine("view/CustomDialogWidget.ets(71:7)");
            Text.fontColor({ "id": 16777287, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.fontSize({ "id": 16777276, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777278, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIGGER);
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ left: { "id": 16777277, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.debugLine("view/CustomDialogWidget.ets(78:7)");
            List.margin({
                top: { "id": 16777264, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                bottom: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
            });
            List.divider({
                strokeWidth: { "id": 16777250, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                color: { "id": 16777288, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
            });
            List.listDirection(Axis.Vertical);
            List.edgeEffect(EdgeEffect.None);
            List.width(CommonConstants.FULL_WIDTH);
            List.height({ "id": 16777267, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const itemHobby = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("view/CustomDialogWidget.ets(80:11)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("view/CustomDialogWidget.ets(81:13)");
                            Row.height({ "id": 16777266, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Row.margin({
                                top: { "id": 16777268, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                                bottom: { "id": 16777265, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(itemHobby.label);
                            Text.debugLine("view/CustomDialogWidget.ets(82:15)");
                            Text.fontSize({ "id": 16777262, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777287, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Text.layoutWeight(CommonConstants.WEIGHT_ONE);
                            Text.textAlign(TextAlign.Start);
                            Text.fontWeight(CommonConstants.BIGGER);
                            Text.margin({ left: { "id": 16777261, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Toggle.create({ type: ToggleType.Checkbox, isOn: false });
                            Toggle.debugLine("view/CustomDialogWidget.ets(89:15)");
                            Toggle.onChange((isCheck) => {
                                itemHobby.isChecked = isCheck;
                            });
                            Toggle.width({ "id": 16777280, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Toggle.height({ "id": 16777280, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Toggle.margin({ right: { "id": 16777279, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Toggle.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Toggle.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("view/CustomDialogWidget.ets(81:13)");
                            Row.height({ "id": 16777266, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Row.margin({
                                top: { "id": 16777268, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                                bottom: { "id": 16777265, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(itemHobby.label);
                            Text.debugLine("view/CustomDialogWidget.ets(82:15)");
                            Text.fontSize({ "id": 16777262, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777287, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Text.layoutWeight(CommonConstants.WEIGHT_ONE);
                            Text.textAlign(TextAlign.Start);
                            Text.fontWeight(CommonConstants.BIGGER);
                            Text.margin({ left: { "id": 16777261, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Toggle.create({ type: ToggleType.Checkbox, isOn: false });
                            Toggle.debugLine("view/CustomDialogWidget.ets(89:15)");
                            Toggle.onChange((isCheck) => {
                                itemHobby.isChecked = isCheck;
                            });
                            Toggle.width({ "id": 16777280, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Toggle.height({ "id": 16777280, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
                            Toggle.margin({ right: { "id": 16777279, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Toggle.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Toggle.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.hobbyItems, forEachItemGenFunction, (itemHobby) => JSON.stringify(itemHobby.label), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/CustomDialogWidget.ets(118:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777223, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Button.debugLine("view/CustomDialogWidget.ets(119:9)");
            __Button__dialogButtonStyle();
            Button.onClick(() => {
                var _a;
                (_a = this.controller) === null || _a === void 0 ? void 0 : _a.close();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("view/CustomDialogWidget.ets(124:9)");
            Blank.backgroundColor({ "id": 16777285, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Blank.width({ "id": 16777241, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Blank.opacity({ "id": 16777240, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Blank.height({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777225, "type": 10003, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Button.debugLine("view/CustomDialogWidget.ets(129:9)");
            __Button__dialogButtonStyle();
            Button.onClick(() => {
                var _a;
                this.setHobbiesValue(ObservedObject.GetRawObject(this.hobbyItems));
                (_a = this.controller) === null || _a === void 0 ? void 0 : _a.close();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Button__dialogButtonStyle() {
    Button.fontSize({ "id": 16777243, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
    Button.fontColor({ "id": 16777286, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
    Button.layoutWeight(CommonConstants.WEIGHT_ONE);
    Button.backgroundColor(Color.White);
    Button.width(CommonConstants.FULL_WIDTH);
    Button.height({ "id": 16777242, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
}
//# sourceMappingURL=CustomDialogWidget.js.map