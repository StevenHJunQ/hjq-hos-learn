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
import CommonConstants from '@bundle:com.huawei.multipledialog/entry/ets/common/constants/CommonConstants';
export default class TextInputWidget extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.inputImage = undefined;
        this.hintText = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.inputImage !== undefined) {
            this.inputImage = params.inputImage;
        }
        if (params.hintText !== undefined) {
            this.hintText = params.hintText;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/TextInputWidget.ets(24:5)");
            Row.margin({ top: { "id": 16777259, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            Row.borderRadius({ "id": 16777258, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.width(CommonConstants.COMMON_DIALOG_WIDTH);
            Row.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.inputImage !== undefined ? this.inputImage : '');
            Image.debugLine("view/TextInputWidget.ets(25:7)");
            Image.width({ "id": 16777254, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.height({ "id": 16777254, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777253, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: this.hintText });
            TextInput.debugLine("view/TextInputWidget.ets(29:7)");
            TextInput.fontSize({ "id": 16777260, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            TextInput.padding({ left: { "id": 16777255, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            TextInput.placeholderColor({ "id": 16777289, "type": 10001, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            TextInput.backgroundColor(Color.White);
            TextInput.fontWeight(FontWeight.Normal);
            TextInput.fontStyle(FontStyle.Normal);
            TextInput.fontColor(Color.Black);
            TextInput.margin({ right: { "id": 16777256, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            TextInput.layoutWeight(CommonConstants.WEIGHT_ONE);
            TextInput.height({ "id": 16777274, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=TextInputWidget.js.map