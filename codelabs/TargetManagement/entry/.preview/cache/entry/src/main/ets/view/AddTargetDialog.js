/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonConstants } from '@bundle:com.huawei.targetmanagement/entry/ets/common/constant/CommonConstant';
export default class AddTargetDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__subtaskName = new ObservedPropertySimplePU('', this, "subtaskName");
        this.controller = undefined;
        this.onClickOk = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.subtaskName !== undefined) {
            this.subtaskName = params.subtaskName;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.onClickOk !== undefined) {
            this.onClickOk = params.onClickOk;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__subtaskName.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__subtaskName.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get subtaskName() {
        return this.__subtaskName.get();
    }
    set subtaskName(newValue) {
        this.__subtaskName.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/AddTargetDialog.ets(25:5)");
            Column.padding({ "id": 16777227, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Column.height({ "id": 16777225, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Column.width(CommonConstants.DIALOG_WIDTH);
            Column.borderRadius(CommonConstants.DIALOG_BORDER_RADIUS);
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.debugLine("view/AddTargetDialog.ets(26:7)");
            Text.width(CommonConstants.FULL_WIDTH);
            Text.fontSize({ "id": 16777245, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT);
            Text.fontColor({ "id": 16777288, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777270, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            TextInput.debugLine("view/AddTargetDialog.ets(32:7)");
            TextInput.placeholderColor(Color.Grey);
            TextInput.placeholderFont({ size: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            TextInput.caretColor(Color.Blue);
            TextInput.backgroundColor({ "id": 16777284, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            TextInput.width(CommonConstants.FULL_WIDTH);
            TextInput.height(CommonConstants.DIALOG_INPUT_HEIGHT);
            TextInput.margin({ top: CommonConstants.DIALOG_INPUT_MARGIN });
            TextInput.fontSize({ "id": 16777233, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            TextInput.fontColor({ "id": 16777288, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.subtaskName = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("view/AddTargetDialog.ets(45:7)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/AddTargetDialog.ets(46:7)");
            Row.width(CommonConstants.DIALOG_OPERATION_WIDTH);
            Row.height(CommonConstants.DIALOG_OPERATION_HEIGHT);
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777265, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Button.debugLine("view/AddTargetDialog.ets(47:9)");
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
            Divider.create();
            Divider.debugLine("view/AddTargetDialog.ets(52:9)");
            Divider.vertical(true);
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777267, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Button.debugLine("view/AddTargetDialog.ets(54:9)");
            __Button__dialogButtonStyle();
            Button.onClick(() => {
                if (this.onClickOk !== undefined) {
                    this.onClickOk(this.subtaskName);
                }
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
/**
 * Custom button style.
 */
function __Button__dialogButtonStyle() {
    Button.fontSize({ "id": 16777218, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Button.height({ "id": 16777222, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Button.width({ "id": 16777223, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Button.backgroundColor(Color.White);
    Button.fontColor({ "id": 16777285, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
}
//# sourceMappingURL=AddTargetDialog.js.map