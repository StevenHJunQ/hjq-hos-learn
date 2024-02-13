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
import { SWIPER_VIDEOS } from '@bundle:com.example.simplevideo/entry/ets/viewmodel/VideoData';
import { SECOND_PAGE } from '@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants';
import { ParamItem } from '@bundle:com.example.simplevideo/entry/ets/viewmodel/ParamItem';
export class SwiperVideo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
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
            Column.debugLine("view/IndexSwiper.ets(27:5)");
            Column.height("24.1%" /* INDEX_SWIPER_HEIGHT_PERCENT */);
            Column.width("93.3%" /* INDEX_COMPONENT_WITH_PERCENT */);
            Column.backgroundColor({ "id": 16777253, "type": 10001, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" });
            Column.margin({
                left: "3.3%" /* INDEX_SWIPER_LEFT_RIGHT_MARGIN */,
                right: "3.3%" /* INDEX_SWIPER_LEFT_RIGHT_MARGIN */,
                top: 24 /* FOURTH_MARGIN */
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Swiper.create();
            Swiper.debugLine("view/IndexSwiper.ets(28:7)");
            Swiper.autoPlay(true);
            if (!isInitialRender) {
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new SwiperItem(this, { imageSrc: item.image, source: { "id": 0, "type": 30000, params: ['videoTest.mp4'], "bundleName": "com.example.simplevideo", "moduleName": "entry" } }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            };
            this.forEachUpdateFunction(elmtId, SWIPER_VIDEOS, forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Swiper.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class SwiperItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.imageSrc = { "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" };
        this.source = { "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" };
        this.paramItem = new ParamItem();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.imageSrc !== undefined) {
            this.imageSrc = params.imageSrc;
        }
        if (params.source !== undefined) {
            this.source = params.source;
        }
        if (params.paramItem !== undefined) {
            this.paramItem = params.paramItem;
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
    aboutToAppear() {
        this.paramItem.source = this.source;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigator.create({ target: SECOND_PAGE, type: NavigationType.Push });
            Navigator.debugLine("view/IndexSwiper.ets(57:5)");
            Navigator.params(this.paramItem);
            if (!isInitialRender) {
                Navigator.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.imageSrc);
            Image.debugLine("view/IndexSwiper.ets(58:7)");
            Image.borderRadius(12 /* FIRST_MARGIN */);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Navigator.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=IndexSwiper.js.map