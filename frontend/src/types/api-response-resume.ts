export interface ApiResponseResume {
  id: any
  name: string
  per_page: string
  total_count: string
  columns: Column[]
  columns_index: ColumnsIndex
  rows_index: RowsIndex
  default_columns_list: string[]
  grid_columns: GridColumns
  rows: Row[]
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
}

export interface ColumnsIndex {
  resume_id: number
  title: number
  description: number
  education: number
  stack: number
  salary: number
}

export interface RowsIndex {
  "1": number
}

export interface GridColumns {
  grid_fields: string[]
}

export interface Row {
  resume_id: ResumeId
  title: Title
  description: Description
  education: Education
  stack: Stack
  salary: Salary
}

export interface ResumeId {
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

export interface Description {
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

export interface Education {
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
  "54": string
  "55": string
  "56": string
  "58": string
}

export interface Salary {
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
