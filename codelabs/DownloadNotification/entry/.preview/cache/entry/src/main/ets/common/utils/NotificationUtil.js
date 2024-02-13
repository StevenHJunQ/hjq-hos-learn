/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
import wantAgent from '@ohos:app.ability.wantAgent';
import notification from '@ohos:notificationManager';
import CommonConstants from '@bundle:com.example.downloadnotification/entry/ets/common/constants/CommonConstants';
import Logger from '@bundle:com.example.downloadnotification/entry/ets/common/utils/Logger';
/**
 * Obtains the WantAgent of an application.
 *
 * @returns WantAgent of an application.
 */
export function createWantAgent(bundleName, abilityName) {
    let wantAgentInfo = {
        wants: [
            {
                bundleName: bundleName,
                abilityName: abilityName
            }
        ],
        operationType: wantAgent.OperationType.START_ABILITY,
        requestCode: 0,
        wantAgentFlags: [wantAgent.WantAgentFlags.CONSTANT_FLAG]
    };
    return wantAgent.getWantAgent(wantAgentInfo);
}
/**
 * Publish notification.
 *
 * @param progress Download progress
 * @param title Notification title.
 * @param wantAgentObj The want of application.
 */
export function publishNotification(progress, title, wantAgentObj) {
    let template = {
        name: 'downloadTemplate',
        data: {
            progressValue: progress,
            progressMaxValue: CommonConstants.PROGRESS_TOTAL,
            isProgressIndeterminate: false
        }
    };
    let notificationRequest = {
        id: CommonConstants.NOTIFICATION_ID,
        slotType: notification.SlotType.CONTENT_INFORMATION,
        // Construct a progress bar template. The name field must be set to downloadTemplate.
        template: template,
        content: {
            contentType: notification.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
            normal: {
                title: `${title}：${CommonConstants.DOWNLOAD_FILE}`,
                text: '',
                additionalText: `${progress}%`
            }
        },
        wantAgent: wantAgentObj
    };
    notification.publish(notificationRequest).catch((err) => {
        Logger.error(`[ANS] publish failed,message is ${err}`);
    });
}
/**
 * open notification permission
 */
export function openNotificationPermission() {
    notification.requestEnableNotification().then(() => {
        Logger.info('Enable notification success');
    }).catch((err) => {
        Logger.error('Enable notification failed because ' + JSON.stringify(err));
    });
}
//# sourceMappingURL=NotificationUtil.js.map