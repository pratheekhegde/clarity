/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { ClrConditionalModule } from "../../utils/conditional/conditional.module";
import { CommonModule } from "@angular/common";
import { TABS_DIRECTIVES } from "./index";
import {ClrIconModule} from "../../icon/icon.module";
import {ClrCommonPopoverModule} from "../../popover/common/popover.module";
import {ClrTemplateRefModule} from "../../utils/template-ref/template-ref.module";

@NgModule({
    imports: [
        CommonModule,
        ClrCommonPopoverModule,
        ClrConditionalModule,
        ClrIconModule,
        ClrTemplateRefModule
    ],
    declarations: [
        TABS_DIRECTIVES
    ],
    exports: [
        TABS_DIRECTIVES,
        ClrConditionalModule
    ]
})
export class ClrTabsModule {}
