import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
var TagsComponent = /** @class */ (function () {
    function TagsComponent() {
        this.tagsChange = new EventEmitter();
        this.tags = [];
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.limit = this.limit || 5;
        this.placeholder = this.placeholder || 'Add tags';
        this.header = this.header || 'Tags';
        if (this.mode === 'success') {
            this.mode = 'green';
        }
        else if (this.mode === 'primary') {
            this.mode = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.mode = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.mode = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.mode = 'cornflowerblue';
        }
        else {
            this.mode = '';
        }
    };
    TagsComponent.prototype.add = function (e) {
        if (this.tags.length < this.limit - 1) {
            this.tags.push(e.target.value);
        }
        else {
            this.tags[this.limit - 1] = e.target.value;
        }
        e.target.value = '';
        this.tagsChange.emit(this.tags);
    };
    TagsComponent.prototype.remove = function (i) {
        this.tags.splice(i, 1);
    };
    __decorate([
        Output()
    ], TagsComponent.prototype, "tagsChange", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "limit", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "mode", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "header", void 0);
    TagsComponent = __decorate([
        Component({
            selector: 'ngx-tags-input',
            template: "<label for=\"headerText\">{{ header }}</label>\n<input\n  type=\"text\"\n  class=\"input-tags\"\n  (change)=\"add($event)\"\n  [style.borderColor]=\"mode\"\n  [placeholder]=\"placeholder\"\n/>\n<label for=\"\">Max:{{ limit }} </label>\n<div class=\"righter\">\n  <span\n    class=\"labeler\" (click)=\"remove(i)\"\n    [style.backgroundColor]=\"mode\"\n    *ngFor=\"let item of tags; index as i\"\n  >\n    {{ item }}&nbsp;&times;\n  </span>\n</div>\n",
            styles: [".input-tags{width:100%;background-color:#fff;padding:.625rem;margin:.3125rem 0;border:1px solid #000;}.labeler{padding:7.5px;border-radius:5px;margin:.3125rem 0 .3125rem .3125rem;color:#000000;font-size:12px;text-transform:lowercase;cursor:pointer;padding-top:10px;}.righter{text-align:right;margin:10px;}input:focus{border:1px solid!important;outline:0;box-shadow:none}"]
        })
    ], TagsComponent);
    return TagsComponent;
}());
export { TagsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC1ib3gvIiwic291cmNlcyI6WyJsaWIvdGFncy90YWdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRTtJQUNFO1FBQ1UsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNMUMsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQVBLLENBQUM7SUFTaEIsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBQ0QsMkJBQUcsR0FBSCxVQUFJLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM1QztRQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUF2Q1M7UUFBVCxNQUFNLEVBQUU7cURBQWlDO0lBQ2pDO1FBQVIsS0FBSyxFQUFFO2dEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7K0NBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTtzREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7aURBQWdCO0lBTmIsYUFBYTtRQUx6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGdlQUFvQzs7U0FFckMsQ0FBQztPQUNXLGFBQWEsQ0EwQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdGFncy1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFncy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBAT3V0cHV0KCkgdGFnc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlcjtcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcblxuICB0YWdzID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saW1pdCA9IHRoaXMubGltaXQgfHwgNTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCAnQWRkIHRhZ3MnO1xuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXIgfHwgJ1RhZ3MnO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAncHJpbWFyeScpIHtcbiAgICAgIHRoaXMubW9kZSA9ICcjMGQ0N2ExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdjcmltc29uJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnI2ZmOTgwMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdpbmZvJykge1xuICAgICAgdGhpcy5tb2RlID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9XG4gIH1cbiAgYWRkKGUpIHtcbiAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA8IHRoaXMubGltaXQgLSAxKSB7XG4gICAgICB0aGlzLnRhZ3MucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFnc1t0aGlzLmxpbWl0IC0gMV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICB0aGlzLnRhZ3NDaGFuZ2UuZW1pdCh0aGlzLnRhZ3MpO1xuICB9XG5cbiAgcmVtb3ZlKGkpIHtcbiAgICB0aGlzLnRhZ3Muc3BsaWNlKGksIDEpO1xuICB9XG59XG4iXX0=
