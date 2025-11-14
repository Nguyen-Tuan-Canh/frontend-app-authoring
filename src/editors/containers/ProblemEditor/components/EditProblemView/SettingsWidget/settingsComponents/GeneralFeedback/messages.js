import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  generalFeebackSettingTitle: {
    id: 'authoring.problemeditor.settings.generalFeebackSettingTitle',
    defaultMessage: 'Phản hồi chung',
    description: 'Nhãn cho thiết lập phản hồi chung',
  },
  generalFeedbackInputLabel: {
    id: 'authoring.problemeditor.settings.generalFeedbackInputLabel',
    defaultMessage: 'Nhập phản hồi chung',
    description: 'Nhãn cho ô nhập phản hồi chung, mô tả quy tắc',
  },
  generalFeedbackDescription: {
    id: 'authoring.problemeditor.settings.generalFeedbackInputDescription',
    defaultMessage: 'Nhập nội dung phản hồi sẽ hiển thị khi học viên gửi đáp án sai. Phản hồi này sẽ bị ghi đè nếu bạn thêm phản hồi riêng cho từng đáp án.',
    description: 'Mô tả cho ô nhập phản hồi chung, làm rõ cách sử dụng',
  },
  noGeneralFeedbackSummary: {
    id: 'authoring.problemeditor.settings.generalFeedback.noFeedbackSummary',
    defaultMessage: 'Không có',
    description: 'Thông báo cho biết hiện chưa có phản hồi chung nào được thiết lập',
  },
});

export default messages;
