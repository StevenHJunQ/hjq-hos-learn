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
import router from '@ohos:router';
import { HORIZONTAL_VIDEOS } from '@bundle:com.example.simplevideo/entry/ets/viewmodel/VideoData';
import { SECOND_PAGE, NET } from '@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants';
export class VideoModule extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.moduleName = '';
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.moduleName !== undefined) {
            this.moduleName = params.moduleName;
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
            Column.create();
            Column.debugLine("view/IndexModule.ets(29:5)");
            Column.margin({
                left: "3.3%" /* INDEX_SWIPER_LEFT_RIGHT_MARGIN */,
                right: "3.3%" /* INDEX_SWIPER_LEFT_RIGHT_MARGIN */
            });
            Column.width("93.3%" /* INDEX_COMPONENT_WITH_PERCENT */);
            Column.justifyContent(FlexAlign.Center);
            Column.borderRadius(24 /* FOURTH_MARGIN */);
            Column.borderStyle(BorderStyle.Solid);
            Column.borderColor(Color.White);
            Column.backgroundColor({ "id": 16777253, "type": 10001, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Row });
            Flex.debugLine("view/IndexModule.ets(30:7)");
            Flex.margin({
                left: "3.3%" /* INDEX_SWIPER_LEFT_RIGHT_MARGIN */,
                bottom: 12 /* FIRST_MARGIN */,
                top: 12 /* FIRST_MARGIN */
            });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.moduleName);
            Text.debugLine("view/IndexModule.ets(31:9)");
            Text.fontSize(18 /* THIRD_MARGIN */);
            Text.fontWeight(FontWeight.Bolder);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Flex.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 12 /* FIRST_MARGIN */ });
            List.debugLine("view/IndexModule.ets(41:7)");
            List.listDirection(Axis.Horizontal);
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("view/IndexModule.ets(43:11)");
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
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new HorizontalItem(this, {
                                        imageSrc: item.image,
                                        source: NET,
                                        videoName: item.name
                                    }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new HorizontalItem(this, {
                                        imageSrc: item.image,
                                        source: NET,
                                        videoName: item.name
                                    }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
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
            this.forEachUpdateFunction(elmtId, HORIZONTAL_VIDEOS, forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class HorizontalItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.imageSrc = { "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" };
        this.source = '';
        this.videoName = '';
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.imageSrc !== undefined) {
            this.imageSrc = params.imageSrc;
        }
        if (params.source !== undefined) {
            this.source = params.source;
        }
        if (params.videoName !== undefined) {
            this.videoName = params.videoName;
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
            Column.create();
            Column.debugLine("view/IndexModule.ets(74:5)");
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.imageSrc);
            Image.debugLine("view/IndexModule.ets(75:7)");
            Image.width(132 /* SEVENTH_MARGIN */);
            Image.height(94 /* SIXTH_MARGIN */);
            Image.onClick(() => {
                router.pushUrl({
                    url: SECOND_PAGE,
                    params: { source: this.source }
                });
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.videoName);
            Text.debugLine("view/IndexModule.ets(84:7)");
            Text.margin({
                top: 12 /* FIRST_MARGIN */,
                bottom: 12 /* FIRST_MARGIN */
            });
            Text.textAlign(TextAlign.Center);
            Text.fontSize(16 /* SECOND_MARGIN */);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=IndexModule.js.map