/*
 Copyright 2018 VMware, Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
import {environment} from '../../../environments/environment';

const CONFIGURE_VCH_MODAL_BASE_URL = `/ui/vic/resources/${environment.production ? 'dist' : 'build-dev'}/index.html`;
export const CONFIGURE_VCH_MODAL_GENERAL_URL = `${CONFIGURE_VCH_MODAL_BASE_URL}?view=configure-vch-modal-general`;
export const CONFIGURE_VCH_MODAL_COMPUTE_URL = `${CONFIGURE_VCH_MODAL_BASE_URL}?view=configure-vch-modal-compute`;
export const CONFIGURE_VCH_MODAL_STORAGE_URL = `${CONFIGURE_VCH_MODAL_BASE_URL}?view=configure-vch-modal-storage`;
export const CONFIGURE_VCH_MODAL_NETWORK_URL = `${CONFIGURE_VCH_MODAL_BASE_URL}?view=configure-vch-modal-network`;
export const CONFIGURE_VCH_MODAL_SECURITY_URL = `${CONFIGURE_VCH_MODAL_BASE_URL}?view=configure-vch-modal-security`;
export const CONFIGURE_VCH_MODAL_REGISTRY_URL = `${CONFIGURE_VCH_MODAL_BASE_URL}?view=configure-vch-modal-registry`;
export const CONFIGURE_VCH_MODAL_OPERATIONS_URL = `${CONFIGURE_VCH_MODAL_BASE_URL}?view=configure-vch-modal-operations`;

export const CONFIGURE_VCH_MODAL_WIDTH = 900;
export const CONFIGURE_VCH_MODAL_HEIGHT = 600;