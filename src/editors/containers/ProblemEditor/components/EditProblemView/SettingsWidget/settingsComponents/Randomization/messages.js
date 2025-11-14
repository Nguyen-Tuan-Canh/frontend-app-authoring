import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  randomizationSettingTitle: {
    id: 'authoring.problemeditor.settings.randomization.SettingTitle',
    defaultMessage: 'Ngẫu nhiên',
    description: 'Tiêu đề phần cài đặt cho widget Ngẫu nhiên',
  },
  randomizationSettingText: {
    id: 'authoring.problemeditor.settings.randomization.SettingText',
    defaultMessage: `{randomization, select,
      null {Bài tập này không sử dụng ngẫu nhiên dựa trên Python.}
      other {Xác định thời điểm sinh ngẫu nhiên các biến được khai báo trong đoạn mã Python liên quan. Với bài tập không sinh giá trị ngẫu nhiên, hãy chọn "Never".}
    }`,
    description: 'Mô tả các lựa chọn cho giá trị trong widget Ngẫu nhiên',
  },
});

export default messages;
