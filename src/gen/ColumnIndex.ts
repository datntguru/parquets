/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.2
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as BoundaryOrder from "./BoundaryOrder";
export interface IColumnIndexArgs {
  null_pages: Array<boolean>;
  min_values: Array<Buffer>;
  max_values: Array<Buffer>;
  boundary_order: BoundaryOrder.BoundaryOrder;
  null_counts?: Array<number | Int64>;
}
export class ColumnIndex {
  public null_pages: Array<boolean>;
  public min_values: Array<Buffer>;
  public max_values: Array<Buffer>;
  public boundary_order: BoundaryOrder.BoundaryOrder;
  public null_counts?: Array<Int64>;
  constructor(args: IColumnIndexArgs) {
    if (args != null && args.null_pages != null) {
      this.null_pages = args.null_pages;
    }
    else {
      throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[null_pages] is unset!");
    }
    if (args != null && args.min_values != null) {
      this.min_values = args.min_values;
    }
    else {
      throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[min_values] is unset!");
    }
    if (args != null && args.max_values != null) {
      this.max_values = args.max_values;
    }
    else {
      throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[max_values] is unset!");
    }
    if (args != null && args.boundary_order != null) {
      this.boundary_order = args.boundary_order;
    }
    else {
      throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[boundary_order] is unset!");
    }
    if (args != null && args.null_counts != null) {
      this.null_counts = args.null_counts.map(c => new Int64(+c));
    }
  }
  public write(output: thrift.TProtocol): void {
    output.writeStructBegin("ColumnIndex");
    if (this.null_pages != null) {
      output.writeFieldBegin("null_pages", thrift.Thrift.Type.LIST, 1);
      output.writeListBegin(thrift.Thrift.Type.BOOL, this.null_pages.length);
      this.null_pages.forEach((value_1: boolean): void => {
        output.writeBool(value_1);
      });
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.min_values != null) {
      output.writeFieldBegin("min_values", thrift.Thrift.Type.LIST, 2);
      output.writeListBegin(thrift.Thrift.Type.STRING, this.min_values.length);
      this.min_values.forEach((value_2: Buffer): void => {
        output.writeBinary(value_2);
      });
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.max_values != null) {
      output.writeFieldBegin("max_values", thrift.Thrift.Type.LIST, 3);
      output.writeListBegin(thrift.Thrift.Type.STRING, this.max_values.length);
      this.max_values.forEach((value_3: Buffer): void => {
        output.writeBinary(value_3);
      });
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.boundary_order != null) {
      output.writeFieldBegin("boundary_order", thrift.Thrift.Type.I32, 4);
      output.writeI32(this.boundary_order);
      output.writeFieldEnd();
    }
    if (this.null_counts != null) {
      output.writeFieldBegin("null_counts", thrift.Thrift.Type.LIST, 5);
      output.writeListBegin(thrift.Thrift.Type.I64, this.null_counts.length);
      this.null_counts.forEach((value_4: Int64): void => {
        output.writeI64(value_4);
      });
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }
  public static read(input: thrift.TProtocol): ColumnIndex {
    input.readStructBegin();
    let _args: any = {};
    while (true) {
      const ret: thrift.TField = input.readFieldBegin();
      const fieldType: thrift.Thrift.Type = ret.ftype;
      const fieldId: number = ret.fid;
      if (fieldType === thrift.Thrift.Type.STOP) {
        break;
      }
      switch (fieldId) {
        case 1:
          if (fieldType === thrift.Thrift.Type.LIST) {
            const value_5: Array<boolean> = new Array<boolean>();
            const metadata_1: thrift.TList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_6: boolean = input.readBool();
              value_5.push(value_6);
            }
            input.readListEnd();
            _args.null_pages = value_5;
          }
          else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.Thrift.Type.LIST) {
            const value_7: Array<Buffer> = new Array<Buffer>();
            const metadata_2: thrift.TList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_8: Buffer = input.readBinary();
              value_7.push(value_8);
            }
            input.readListEnd();
            _args.min_values = value_7;
          }
          else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.Thrift.Type.LIST) {
            const value_9: Array<Buffer> = new Array<Buffer>();
            const metadata_3: thrift.TList = input.readListBegin();
            const size_3: number = metadata_3.size;
            for (let i_3: number = 0; i_3 < size_3; i_3++) {
              const value_10: Buffer = input.readBinary();
              value_9.push(value_10);
            }
            input.readListEnd();
            _args.max_values = value_9;
          }
          else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.Thrift.Type.I32) {
            const value_11: BoundaryOrder.BoundaryOrder = input.readI32();
            _args.boundary_order = value_11;
          }
          else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.Thrift.Type.LIST) {
            const value_12: Array<Int64> = new Array<Int64>();
            const metadata_4: thrift.TList = input.readListBegin();
            const size_4: number = metadata_4.size;
            for (let i_4: number = 0; i_4 < size_4; i_4++) {
              const value_13: Int64 = input.readI64();
              value_12.push(value_13);
            }
            input.readListEnd();
            _args.null_counts = value_12;
          }
          else {
            input.skip(fieldType);
          }
          break;
        default: {
          input.skip(fieldType);
        }
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    if (_args.null_pages !== undefined && _args.min_values !== undefined && _args.max_values !== undefined && _args.boundary_order !== undefined) {
      return new ColumnIndex(_args);
    }
    else {
      throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ColumnIndex from input");
    }
  }
}
