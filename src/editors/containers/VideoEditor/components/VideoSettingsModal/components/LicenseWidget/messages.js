import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.license.title',
    defaultMessage: 'Giấy phép',
    description: 'Tiêu đề cho phần thiết lập giấy phép',
  },
  licenseTypeLabel: {
    id: 'authoring.videoeditor.license.licenseType.label',
    defaultMessage: 'Loại giấy phép',
    description: 'Nhãn cho trường chọn loại giấy phép',
  },
  detailsSubsectionTitle: {
    id: 'authoring.videoeditor.license.detailsSubsection.title',
    defaultMessage: 'Chi tiết giấy phép',
    description: 'Tiêu đề cho phần chi tiết giấy phép',
  },
  displaySubsectionTitle: {
    id: 'authoring.videoeditor.license.displaySubsection.title',
    defaultMessage: 'Hiển thị giấy phép',
    description: 'Tiêu đề cho phần hiển thị giấy phép',
  },
  addLicenseButtonLabel: {
    id: 'authoring.videoeditor.license.add.label',
    defaultMessage: 'Thêm giấy phép cho video này',
    description: 'Nhãn nút để thêm giấy phép',
  },
  deleteLicenseSelection: {
    id: 'authoring.videoeditor.license.deleteLicenseSelection',
    defaultMessage: 'Xóa và áp dụng giấy phép ở mức khóa học',
    description: 'Hành động xóa lựa chọn giấy phép và dùng giấy phép của khóa học',
  },
  allRightsReservedIconsLabel: {
    id: 'authoring.videoeditor.license.allRightsReservedIcons.label',
    defaultMessage: 'Giữ toàn bộ bản quyền (All Rights Reserved)',
    description: 'Nhãn cho dòng biểu tượng All Rights Reserved',
  },
  creativeCommonsIconsLabel: {
    id: 'authoring.videoeditor.license.creativeCommonsIcons.label',
    defaultMessage: 'Giữ một phần bản quyền (Some Rights Reserved)',
    description: 'Nhãn cho dòng biểu tượng Creative Commons',
  },
  viewLicenseDetailsLabel: {
    id: 'authoring.videoeditor.license.viewLicenseDetailsLabel.label',
    defaultMessage: 'Xem chi tiết giấy phép',
    description: 'Nhãn nút xem chi tiết giấy phép',
  },
  courseLevelDescription: {
    id: 'authoring.videoeditor.license.courseLevelDescription.helperText',
    defaultMessage: 'Giấy phép hiện đang được thiết lập ở mức khóa học.',
    description: 'Giải thích khi đang dùng giấy phép của khóa học',
  },
  courseLicenseDescription: {
    id: 'authoring.videoeditor.license.courseLicenseDescription.message',
    defaultMessage: 'Giấy phép được thiết lập ở mức khóa học sẽ hiển thị ở cuối các trang nội dung trong khóa học.',
    description: 'Thông điệp giải thích nơi hiển thị giấy phép của khóa học',
  },
  libraryLevelDescription: {
    id: 'authoring.videoeditor.license.libraryLevelDescription.helperText',
    defaultMessage: 'Giấy phép hiện đang được thiết lập ở mức thư viện.',
    description: 'Giải thích khi đang dùng giấy phép của thư viện',
  },
  libraryLicenseDescription: {
    id: 'authoring.videoeditor.license.libraryLicenseDescription.message',
    defaultMessage: 'Giấy phép được thiết lập ở mức thư viện sẽ hiển thị trên video tương ứng trong thư viện.',
    description: 'Thông điệp giải thích nơi hiển thị giấy phép ở mức thư viện',
  },
  defaultLevelDescription: {
    id: 'authoring.videoeditor.license.defaultLevelDescription.helperText',
    defaultMessage: 'Giấy phép này được thiết lập riêng cho video này.',
    description: 'Giải thích khi chọn giấy phép riêng cho một video cụ thể',
  },
  defaultLicenseDescription: {
    id: 'authoring.videoeditor.license.defaultLicenseDescription.message',
    defaultMessage: 'Khi một video có giấy phép khác với toàn bộ khóa học, học viên sẽ thấy giấy phép ở góc dưới bên phải của trình phát video.',
    description: 'Thông điệp giải thích nơi học viên thấy giấy phép riêng của video',
  },
  attributionCheckboxLabel: {
    id: 'authoring.videoeditor.license.attributionCheckboxLabel',
    defaultMessage: 'Ghi công (Attribution)',
    description: 'Nhãn cho checkbox yêu cầu ghi công',
  },
  attributionSectionDescription: {
    id: 'authoring.videoeditor.license.attributionSectionDescription',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình chiếu tác phẩm có bản quyền của bạn nhưng họ phải ghi công theo cách bạn yêu cầu. Hiện tùy chọn này là bắt buộc.',
    description: 'Mô tả phần ghi công trong giấy phép',
  },
  noncommercialCheckboxLabel: {
    id: 'authoring.videoeditor.license.noncommercialCheckboxLabel',
    defaultMessage: 'Phi thương mại (Noncommercial)',
    description: 'Nhãn cho checkbox phi thương mại',
  },
  noncommercialSectionDescription: {
    id: 'authoring.videoeditor.license.noncommercialSectionDescription',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình chiếu tác phẩm của bạn – và các tác phẩm phái sinh dựa trên đó – nhưng chỉ cho mục đích phi thương mại.',
    description: 'Mô tả phần giấy phép phi thương mại',
  },
  noDerivativesCheckboxLabel: {
    id: 'authoring.videoeditor.license.noDerivativesCheckboxLabel',
    defaultMessage: 'Không phái sinh (No Derivatives)',
    description: 'Nhãn cho checkbox Không phái sinh',
  },
  noDerivativesSectionDescription: {
    id: 'authoring.videoeditor.license.noDerivativesSectionDescription',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình chiếu tác phẩm của bạn nguyên bản, nhưng không cho phép tạo tác phẩm phái sinh dựa trên đó. Tùy chọn này không tương thích với "Share Alike".',
    description: 'Mô tả phần giấy phép không cho phép phái sinh',
  },
  shareAlikeCheckboxLabel: {
    id: 'authoring.videoeditor.license.shareAlikeCheckboxLabel',
    defaultMessage: 'Chia sẻ tương tự (Share Alike)',
    description: 'Nhãn cho checkbox Share Alike',
  },
  shareAlikeSectionDescription: {
    id: 'authoring.videoeditor.license.shareAlikeSectionDescription',
    defaultMessage: 'Cho phép người khác phân phối các tác phẩm phái sinh nhưng phải sử dụng cùng loại giấy phép với giấy phép đang áp dụng cho tác phẩm của bạn. Tùy chọn này không tương thích với "No Derivatives".',
    description: 'Mô tả phần giấy phép Share Alike',
  },
  allRightsReservedSectionMessage: {
    id: 'authoring.videoeditor.license.allRightsReservedSectionMessage',
    defaultMessage: 'Bạn giữ toàn bộ quyền đối với tác phẩm của mình.',
    description: 'Thông điệp cho phần All Rights Reserved',
  },
});

export default messages;
