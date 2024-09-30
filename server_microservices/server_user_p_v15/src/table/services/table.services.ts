import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class TableService {
  constructor(@InjectConnection() private connection: Connection) { }

  async getTables(): Promise<
    { id: number; name: string; columnCount: number; columns: { name: string, type: string, isNullable: string, default: string | null }[] }[]
  > {
    const tableQuery = `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `;
    const tables = await this.connection.query(tableQuery);

    const result = [];
    for (let index = 0; index < tables.length; index++) {
      const tableName = tables[index].table_name;

      const columnQuery = `
        SELECT 
          column_name, 
          data_type, 
          is_nullable, 
          column_default
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = '${tableName}';
      `;
      const columns = await this.connection.query(columnQuery);

      result.push({
        id: index + 1,
        name: tableName,
        columnCount: columns.length,
        columns: columns.map((column: any) => ({
          name: column.column_name,
          type: column.data_type,
          isNullable: column.is_nullable,
          default: column.column_default
        }))
      });
    }

    return result;
  }



  async getTableName(): Promise<
    { id: number; name: string; columnCount: number; columns: { name: string, type: string, isNullable: string, default: string | null }[] }[]
  > {
    const tableQuery = `
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public';
  `;
    const tables = await this.connection.query(tableQuery);

    const result = [];
    for (let index = 0; index < tables.length; index++) {
      const tableName = tables[index].table_name;

      const columnQuery = `
      SELECT 
        column_name, 
        data_type, 
        is_nullable, 
        column_default
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      AND table_name = '${tableName}';
    `;
      const columns = await this.connection.query(columnQuery);

      result.push({
        id: index + 1,
        name: tableName,
        columnCount: columns.length,
        columns: columns.map((column: any) => ({
          name: column.column_name,
          type: column.data_type,
          isNullable: column.is_nullable,
          default: column.column_default
        }))
      });
    }

    return result;
  }

  async getTableByName(tableName: string): Promise<
    { id: number; name: string; columnCount: number; columns: { name: string, type: string, isNullable: string, default: string | null }[] } | null
  > {
    const columnQuery = `
    SELECT 
      column_name, 
      data_type, 
      is_nullable, 
      column_default
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = $1;  -- sử dụng placeholder để tránh SQL injection
  `;
    const columns = await this.connection.query(columnQuery, [tableName]);

    if (columns.length === 0) {
      return null; // Nếu không tìm thấy bảng
    }

    return {
      id: 1, 
      name: tableName,
      columnCount: columns.length,
      columns: columns.map((column: any) => ({
        name: column.column_name,
        type: column.data_type,
        isNullable: column.is_nullable,
        default: column.column_default
      }))
    };
  }
}
