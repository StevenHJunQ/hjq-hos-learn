import { CommonConstant as Const } from '@bundle:com.example.webcomponent/entry/ets/common/Constant';
function __Button__fancy(top) {
    Button.fontSize(Const.MainConstant_BUTTON_FONT_SIZE);
    Button.fontColor({ "id": 16777238, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
    Button.width(Const.MainConstant_BUTTON_WIDTH);
    Button.height(Const.MainConstant_BUTTON_HEIGHT);
    Button.margin({ top: top });
    Button.backgroundColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
    Button.borderRadius(Const.MainConstant_BUTTON_BORDER_RADIUS);
}
class MainPage extends ViewPU {
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
            Column.debugLine("pages/MainPage.ets(33:5)");
            Column.height(Const.MainConstant_FULL_HEIGHT);
            Column.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Image.debugLine("pages/MainPage.ets(34:7)");
            Image.width(Const.MainConstant_FULL_HEIGHT);
            Image.height(Const.MainConstant_IMAGE_HEIGHT);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigator.create({ target: Const.WEB_PAGE_URI, type: NavigationType.Push });
            Navigator.debugLine("pages/MainPage.ets(37:7)");
            Navigator.params({ path: Const.LOCAL_PATH, tips: { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" } });
            if (!isInitialRender) {
                Navigator.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Button.debugLine("pages/MainPage.ets(38:9)");
            __Button__fancy(Const.MainConstant_BUTTON_MARGIN_TOP);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Navigator.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigator.create({ target: Const.WEB_PAGE_URI, type: NavigationType.Push });
            Navigator.debugLine("pages/MainPage.ets(43:7)");
            Navigator.params({ path: Const.CLOUD_PATH, tips: { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" } });
            if (!isInitialRender) {
                Navigator.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.webcomponent", "moduleName": "entry" });
            Button.debugLine("pages/MainPage.ets(44:9)");
            __Button__fancy(Const.MainConstant_BUTTON_MARGIN_TOP_BUTTON);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Navigator.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MainPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MainPage.js.map