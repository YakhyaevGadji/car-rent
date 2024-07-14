import { NoticeType } from "antd/es/message/interface";

export interface ITypePropsCars {
    messageTop: (status: NoticeType, content: string) => void
}