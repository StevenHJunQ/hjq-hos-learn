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
import { HorizontalVideoItem } from '@bundle:com.example.simplevideo/entry/ets/viewmodel/HorizontalVideoItem';
import { SwiperVideoItem } from '@bundle:com.example.simplevideo/entry/ets/viewmodel/SwiperVideoItem';
export const SWIPER_VIDEOS = [
    new SwiperVideoItem({ "id": 16777259, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }),
    new SwiperVideoItem({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }),
    new SwiperVideoItem({ "id": 16777255, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" })
];
export const HORIZONTAL_VIDEOS = [
    new HorizontalVideoItem(1, { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }, '视频1'),
    new HorizontalVideoItem(2, { "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }, '视频2'),
    new HorizontalVideoItem(3, { "id": 16777256, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }, '视频3')
];
//# sourceMappingURL=VideoData.js.map