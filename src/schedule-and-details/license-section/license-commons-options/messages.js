import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  licenseCreativeOptionsLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.options.label',
    defaultMessage: 'Tùy chọn cho Creative Commons',
  },
  licenseCreativeOptionsHelpText: {
    id: 'course-authoring.schedule-section.license.creative-commons.options.help-text',
    defaultMessage: 'Các tùy chọn sau đây áp dụng cho giấy phép Creative Commons.',
  },
  licenseCreativeOptionBYLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.BY.label',
    defaultMessage: 'Ghi công (Attribution)',
  },
  licenseCreativeOptionBYDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.BY.description',
    defaultMessage:
      'Cho phép người khác sao chép, phân phối, hiển thị và trình diễn tác phẩm có bản quyền của bạn, nhưng chỉ khi họ ghi công theo cách mà bạn yêu cầu. Hiện tại, tùy chọn này là bắt buộc.',
  },
  licenseCreativeOptionNCLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.NC.label',
    defaultMessage: 'Phi thương mại (Noncommercial)',
  },
  licenseCreativeOptionNCDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.NC.description',
    defaultMessage:
      'Cho phép người khác sao chép, phân phối, hiển thị và trình diễn tác phẩm của bạn – và các tác phẩm phái sinh dựa trên đó – nhưng chỉ cho mục đích phi thương mại.',
  },
  licenseCreativeOptionNDLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.ND.label',
    defaultMessage: 'Không phái sinh (No derivatives)',
  },
  licenseCreativeOptionNDDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.ND.description',
    defaultMessage:
      'Cho phép người khác sao chép, phân phối, hiển thị và trình diễn *nguyên bản* tác phẩm của bạn, không cho phép các tác phẩm phái sinh dựa trên đó. Tùy chọn này không tương thích với “Chia sẻ tương tự” (Share Alike).',
  },
  licenseCreativeOptionSALabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.SA.label',
    defaultMessage: 'Chia sẻ tương tự (Share alike)',
  },
  licenseCreativeOptionSADescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.SA.description',
    defaultMessage:
      'Cho phép người khác phân phối các tác phẩm phái sinh chỉ dưới một giấy phép giống hệt với giấy phép đang áp dụng cho tác phẩm của bạn. Tùy chọn này không tương thích với “Không phái sinh” (No Derivatives).',
  },
});

export default messages;
