/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import router from '@ohos:router';
import webview from '@ohos:web.webview';
import prompt from '@ohos:promptAction';
import { CommonConstant as Const } from '@bundle:com.example.webcomponent/entry/ets/common/Constant';
class WebPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.webController = new webview.WebviewController();
        this.__params = new ObservedPropertyObjectPU(router.getParams(), this, "params");
        this.__progressVal = new ObservedPropertySimplePU(0, this, "progressVal");
        this.__isLoading = new ObservedPropertySimplePU(true, this, "isLoading");
        this.__intervalLoading = new ObservedPropertySimplePU(-1, this, "intervalLoading");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.webController !== undefined) {
            this.webController = params.webController;
        }
        if (params.params !== undefined) {
            this.params = params.params;
        }
        if (params.progressVal !== undefined) {
            this.progressVal = params.progressVal;
        }
        if (params.isLoading !== undefined) {
            this.isLoading = params.isLoading;
        }
        if (params.intervalLoading !== undefined) {
            this.intervalLoading = params.intervalLoading;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__params.purgeDependencyOnElmtId(rmElmtId);
        this.__progressVal.purgeDependencyOnElmtId(rmElmtId);
        this.__isLoading.purgeDependencyOnElmtId(rmElmtId);
        this.__intervalLoading.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__params.aboutToBeDeleted();
        this.__progressVal.aboutToBeDeleted();
        this.__isLoading.aboutToBeDeleted();
        this.__intervalLoading.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get params() {
        return this.__params.get();
    }
    set params(newValue) {
        this.__params.set(newValue);
    }
    get progressVal() {
        return this.__progressVal.get();
    }
    set progressVal(newValue) {
        this.__progressVal.set(newValue);
    }
    get isLoading() {
        return this.__isLoading.get();
    }
    set isLoading(newValue) {
        this.__isLoading.set(newValue);
    }
    get intervalLoading() {
        return this.__intervalLoading.get();
    }
    set intervalLoading(newValue) {
        this.__intervalLoading.set(newValue);
    }
    aboutToAppear() {
        this.intervalLoading = setInterval(() => {
            this.progressVal = this.progressVal >= Const.WebConstant_PROGRESS_MAX ?
                Const.WebConstant_PROGRESS_MIN : (this.progressVal + Const.WebConstant_PROGRESS_STEP);
        }, Const.WebConstant_MILLI_SECONDS);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.debugLine("pages/WebPage.ets(38:5)");
            Stack.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Image.debugLine("pages/WebPage.ets(39:7)");
            Image.width(Const.MainConstant_FULL_HEIGHT);
            Image.height(Const.MainConstant_IMAGE_HEIGHT);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/WebPage.ets(42:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/WebPage.ets(43:9)");
            Column.width(Const.WebConstant_FULL_WIDTH);
            Column.height(Const.WebConstant_FULL_HEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/WebPage.ets(44:11)");
            Row.height(Const.WebConstant_TOP_ROW_HEIGHT);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 0, "type": 30000, params: ['img/ic_public_back.png'], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Image.debugLine("pages/WebPage.ets(45:13)");
            Image.width(Const.WebConstant_IMAGE_WIDTH);
            Image.height(Const.WebConstant_IMAGE_HEIGHT);
            Image.margin({ left: Const.WebConstant_IMAGE_MARGIN_LEFT });
            Image.onClick(() => {
                router.back();
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Text.debugLine("pages/WebPage.ets(52:13)");
            Text.fontSize(Const.WebConstant_TOP_TEXT_FONT_SIZE);
            Text.width(Const.WebConstant_TOP_TEXT_WIDTH);
            Text.height(Const.WebConstant_TOP_TEXT_HEIGHT);
            Text.fontColor({ "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Text.margin({ left: Const.WebConstant_TOP_TEXT_MARGIN_LEFT });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Web component loading H5.
            Web.create({ src: this.params['path'], controller: this.webController });
            Web.debugLine("pages/WebPage.ets(62:11)");
            // Web component loading H5.
            Web.zoomAccess(false);
            // Web component loading H5.
            Web.width(Const.WebConstant_WIDTH);
            // Web component loading H5.
            Web.aspectRatio(1);
            // Web component loading H5.
            Web.margin({ left: Const.WebConstant_MARGIN_LEFT, right: Const.WebConstant_MARGIN_RIGHT,
                top: Const.WebConstant_MARGIN_TOP });
            // Web component loading H5.
            Web.onConfirm((event) => {
                AlertDialog.show({
                    message: Const.WEB_ALERT_DIALOG_TEXT_VALUE + (event === null || event === void 0 ? void 0 : event.message),
                    confirm: {
                        value: { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" },
                        action: () => {
                            event === null || event === void 0 ? void 0 : event.result.handleConfirm();
                        }
                    },
                    cancel: () => {
                        event === null || event === void 0 ? void 0 : event.result.handleCancel();
                    }
                });
                return true;
            });
            // Web component loading H5.
            Web.onErrorReceive((event) => {
                if ((event === null || event === void 0 ? void 0 : event.error.getErrorInfo()) === 'ERR_INTERNET_DISCONNECTED') {
                    prompt.showToast({
                        message: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" },
                        duration: Const.WebConstant_DURATION
                    });
                }
                if ((event === null || event === void 0 ? void 0 : event.error.getErrorInfo()) === 'ERR_CONNECTION_TIMED_OUT') {
                    prompt.showToast({
                        message: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" },
                        duration: Const.WebConstant_DURATION
                    });
                }
            });
            // Web component loading H5.
            Web.onProgressChange((event) => {
                if ((event === null || event === void 0 ? void 0 : event.newProgress) === Const.WebConstant_PROGRESS_MAX) {
                    this.isLoading = false;
                    clearInterval(this.intervalLoading);
                    this.intervalLoading = -1;
                }
            });
            if (!isInitialRender) {
                // Web component loading H5.
                Web.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/WebPage.ets(105:11)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Text.debugLine("pages/WebPage.ets(106:13)");
            Text.fontSize(Const.WebConstant_TEXT_VALUE_FONT_SIZE);
            Text.textAlign(TextAlign.Center);
            Text.fontColor({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Text.height(Const.WebConstant_TEXT_VALUE_HEIGHT);
            Text.fontWeight(Const.WebConstant_TEXT_VALUE_FONT_WEIGHT);
            Text.margin({ top: Const.WebConstant_TEXT_VALUE_MARGIN_TOP });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.params['tips']);
            Text.debugLine("pages/WebPage.ets(113:13)");
            Text.fontSize(Const.WebConstant_TIP_TEXT_VALUE_FONT_SIZE);
            Text.textAlign(TextAlign.Center);
            Text.fontColor({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Text.width(Const.WebConstant_TIP_TEXT_VALUE_WIDTH);
            Text.height(Const.WebConstant_TIP_TEXT_VALUE_HEIGHT);
            Text.opacity(Const.WebConstant_TIP_TEXT_VALUE_OPACITY);
            Text.margin({ top: Const.WebConstant_TIP_TEXT_VALUE_MARGIN_TOP });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Button.debugLine("pages/WebPage.ets(123:11)");
            Button.fontSize(Const.WebConstant_BUTTON_FONT_SIZE);
            Button.fontColor({ "id": 16777238, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Button.margin({ top: Const.WebConstant_BUTTON_MARGIN_TOP });
            Button.width(Const.WebConstant_BUTTON_WIDTH);
            Button.height(Const.WebConstant_BUTTON_HEIGHT);
            Button.backgroundColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Button.borderRadius(Const.WebConstant_BUTTON_BORDER_RADIUS);
            Button.onClick(() => {
                this.webController.runJavaScript('startDraw()');
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isLoading) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Progress.create({
                            value: Const.WebConstant_PROGRESS_MIN,
                            total: Const.WebConstant_PROGRESS_MAX,
                            type: ProgressType.ScaleRing
                        });
                        Progress.debugLine("pages/WebPage.ets(140:9)");
                        Progress.color(Color.Grey);
                        Progress.value(this.progressVal);
                        Progress.width(Const.WebConstant_PROGRESS_WIDTH);
                        Progress.style({
                            strokeWidth: Const.WebConstant_PROGRESS_STROKE_WIDTH,
                            scaleCount: Const.WebConstant_PROGRESS_SCALE_COUNT,
                            scaleWidth: Const.WebConstant_PROGRESS_SCALE_WIDTH
                        });
                        Progress.zIndex(1);
                        Progress.position({
                            x: Const.WebConstant_PROGRESS_POSITION_X,
                            y: Const.WebConstant_PROGRESS_POSITION_Y
                        });
                        if (!isInitialRender) {
                            Progress.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new WebPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=WebPage.js.map