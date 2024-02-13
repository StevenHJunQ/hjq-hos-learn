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
/**
 * Common constants for all features.
 */
export default class CommonConstants {
}
/**
 * The width or height is full.
 */
CommonConstants.FULL_LENGTH = '100%';
/**
 * The width of title.
 */
CommonConstants.TITLE_WIDTH = '86.7%';
/**
 * The width of download card.
 */
CommonConstants.CARD_WIDTH = '93.3%';
/**
 * The weight of image.
 */
CommonConstants.IMAGE_WEIGHT = 1;
/**
 * The weight of card content.
 */
CommonConstants.CARD_CONTENT_WEIGHT = 5;
/**
 * The width of download content.
 */
CommonConstants.CARD_CONTENT_WIDTH = '70%';
/**
 * The width of download image.
 */
CommonConstants.CARD_IMAGE_WIDTH = '30%';
/**
 * The name of download file.
 */
CommonConstants.DOWNLOAD_FILE = '1653067.mp4';
/**
 * The size of download file.
 */
CommonConstants.FILE_SIZE = '25.01MB';
/**
 * Font weight of Large.
 */
CommonConstants.FONT_WEIGHT_LAGER = 500;
/**
 * Font opacity.
 */
CommonConstants.FONT_OPACITY = 0.6;
/**
 * Progress total.
 */
CommonConstants.PROGRESS_TOTAL = 100;
/**
 * Progress Update speed.
 */
CommonConstants.PROGRESS_SPEED = 2;
/**
 * Progress Update frequency.
 */
CommonConstants.UPDATE_FREQUENCY = 1000;
/**
 * Notification id.
 */
CommonConstants.NOTIFICATION_ID = 1000;
/**
 * Download status.
 */
export var DOWNLOAD_STATUS;
(function (DOWNLOAD_STATUS) {
    DOWNLOAD_STATUS[DOWNLOAD_STATUS["INITIAL"] = 0] = "INITIAL";
    DOWNLOAD_STATUS[DOWNLOAD_STATUS["DOWNLOADING"] = 1] = "DOWNLOADING";
    DOWNLOAD_STATUS[DOWNLOAD_STATUS["PAUSE"] = 2] = "PAUSE";
    DOWNLOAD_STATUS[DOWNLOAD_STATUS["FINISHED"] = 3] = "FINISHED";
})(DOWNLOAD_STATUS || (DOWNLOAD_STATUS = {}));
//# sourceMappingURL=CommonConstants.js.map