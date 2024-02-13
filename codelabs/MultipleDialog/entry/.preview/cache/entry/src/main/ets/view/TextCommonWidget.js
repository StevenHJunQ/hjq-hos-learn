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
export default class TextCommonWidget extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__content = new SynchedPropertySimpleTwoWayPU(params.content, this, "content");
        this.textImage = undefined;
        this.title = undefined;
        this.onItemClick = () => { };
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.textImage !== undefined) {
            this.textImage = params.textImage;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.onItemClick !== undefined) {
            this.onItemClick = params.onItemClick;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__content.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__content.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get content() {
        return this.__content.get();
    }
    set content(newValue) {
        this.__content.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/TextCommonWidget.ets(26:5)");
            Row.margin({ top: { "id": 16777272, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            Row.borderRadius({ "id": 16777271, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.width(CommonConstants.COMMON_DIALOG_WIDTH);
            Row.height({ "id": 16777270, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Row.onClick(this.onItemClick);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.textImage !== undefined ? this.textImage : '');
            Image.debugLine("view/TextCommonWidget.ets(27:7)");
            Image.width({ "id": 16777273, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.height({ "id": 16777273, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777252, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.debugLine("view/TextCommonWidget.ets(31:7)");
            Text.fontSize({ "id": 16777275, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.margin({ left: { "id": 16777252, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            Text.height(CommonConstants.FULL_HEIGHT);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.content);
            Text.debugLine("view/TextCommonWidget.ets(35:7)");
            Text.fontSize({ "id": 16777275, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Text.textAlign(TextAlign.End);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(CommonConstants.ONE_LINES);
            Text.margin({
                left: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" },
                right: { "id": 16777245, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" }
            });
            Text.layoutWeight(CommonConstants.WEIGHT_ONE);
            Text.width(CommonConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777293, "type": 20000, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.debugLine("view/TextCommonWidget.ets(46:7)");
            Image.width({ "id": 16777236, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.height({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" });
            Image.margin({ right: { "id": 16777237, "type": 10002, params: [], "bundleName": "com.huawei.multipledialog", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=TextCommonWidget.js.map