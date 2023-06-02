export interface ApiResponse {
  id: any
  name: string
  per_page: string
  total_count: string
  columns: Column[]
  columns_index: ColumnsIndex
  rows_index: RowsIndex
  default_columns_list: string[]
  grid_columns: GridColumns
  rows: VacancyRow[]
}

export interface Column {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: any
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
  onchange?: string
  ajax_options?: AjaxOptions
  select_data?: SelectData
  select_data_indexed?: SelectDataIndexed[]
  select_data_reverse?: SelectDataReverse
}

export interface AjaxOptions {
  update_child_list: string[]
}

export interface SelectData {
  open: string
  inprogress: string
  complete: string
}

export interface SelectDataIndexed {
  id: string
  value: string
}

export interface SelectDataReverse {
  Открыта: string
  "В работе": string
  Выполнена: string
}

export interface ColumnsIndex {
  vacancy_id: number
  title: number
  city_id: number
  stack: number
  client_id: number
  status_id: number
}

export interface RowsIndex {
  "13": number
}

export interface GridColumns {
  grid_fields: string[]
}

export interface VacancyRow {
  vacancy_id: VacancyId
  title: Title
  city_id: CityId
  stack: Stack
  client_id: ClientId
  status_id: StatusId
  experience: Experience
  employment: Employment
  created_at: CreatedAt
}

export interface VacancyId {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
  permissions: Permissions
}

export interface Permissions {
  C: boolean
  R: boolean
  U: boolean
  D: boolean
}

export interface String {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
}


export interface Title {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
}

export interface CityId {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
  onchange: string
  ajax_options: AjaxOptions2
}

export interface AjaxOptions2 {
  update_child_list: string[]
}

export interface Stack {
  name: string
  title: string
  value: string[]
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: ValueString
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
  value_string_implode: string
}

export interface ValueString {
  "3": string
  "4": string
  "5": string
  "7": string
}

export interface ClientId {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
}

export interface StatusId {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  select_data: SelectData2
  select_data_indexed: SelectDataIndexed2[]
  select_data_reverse: SelectDataReverse2
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
}

export interface SelectData2 {
  open: string
  inprogress: string
  complete: string
}

export interface SelectDataIndexed2 {
  id: string
  value: string
}

export interface SelectDataReverse2 {
  Открыта: string
  "В работе": string
  Выполнена: string
}

export interface Experience {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
}

export interface Employment {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  select_data: SelectData3
  select_data_indexed: SelectDataIndexed3[]
  select_data_reverse: SelectDataReverse3
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
}

export interface SelectData3 {
  fulltime: string
  parttime: string
}

export interface SelectDataIndexed3 {
  id: string
  value: string
}

export interface SelectDataReverse3 {
  "Полный день": string
  "Частичная занятость": string
}

export interface CreatedAt {
  name: string
  title: string
  value: string
  type: string
  primary_key_name: string
  primary_key_table: string
  value_string: string
  query: string
  value_name: string
  title_default: string
  value_default: string
  value_table: string
  value_primary_key: string
  value_field: string
  assign_to: string
  dbtype: string
  table_name: string
  primary_key: any
  primary_key_value: any
  action: string
  tab: string
  hint: string
  active_in_topic: string
  group_id: string
  group_id_array: any[]
  entity: string
  combo: any
  parameters: any[]
  required: string
  required_boolean: string
  unique: string
  columns_id: string
  table_id: string
  active: string
}

export interface UserLogoutResponseType {
  state: string
  message: string
}
export interface UserLoginResponseType {
  user_id: string
  group_id: string
  session_key: string
  admin_panel_login: number
  success: number
  api_url: string
  structure: Structure,
  state?: string
}

export interface Structure {
  admin_panel: AdminPanel
  group_name: string
  resume: Resume
}

export interface AdminPanel {
  login: number
}

export interface Resume {
  access: number
}
