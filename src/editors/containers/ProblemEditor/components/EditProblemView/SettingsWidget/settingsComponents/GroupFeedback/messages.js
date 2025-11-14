import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  noGroupFeedbackSummary: {
    id: 'authoring.problemeditor.settings.GroupFeedbackSummary.nonMessage',
    defaultMessage: 'Không có',
    description: 'Thông báo cho biết hiện chưa có phản hồi nhóm nào',
  },
  groupFeedbackSummary: {
    id: 'authoring.problemeditor.settings.GroupFeedbackSummary.message',
    defaultMessage: '{groupFeedback}',
    description: 'Tóm tắt các phản hồi hiện tại được thiết lập cho nhiều câu hỏi',
  },
  addGroupFeedbackButtonText: {
    id: 'authoring.problemeditor.settings.addGroupFeedbackButtonText',
    defaultMessage: 'Thêm phản hồi nhóm',
    description: 'Nút để thêm phản hồi nhóm',
  },
  groupFeedbackInputLabel: {
    id: 'authoring.problemeditor.settings.GroupFeedbackInputLabel',
    defaultMessage: 'Phản hồi nhóm sẽ xuất hiện khi học viên chọn một tập hợp đáp án nhất định.',
    description: 'Nhãn cho ô nhập phản hồi nhóm',
  },
  groupFeedbackSettingTitle: {
    id: 'authoring.problemeditor.settings.GroupFeedbackSettingTitle',
    defaultMessage: 'Phản hồi nhóm',
    description: 'Nhãn cho thiết lập phản hồi nhóm',
  },
});

export default messages;
