import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import { BlackButtonCss, DefaultButtonCss } from '../../Button/ButtonStyle'
import Divider from '../../Divider'
import TextInput from '../../Form/TextInput'
import ConditionalRender from '../../utils/ConditionalRender'
import ProfileImage from '../ProfileImage'
import { ProfileBtnAreaGridCss, ProfileBtnStyleCss, ProfileChildDescCss, ProfileChildrenGridCss, ProfileChildSwitchCss, ProfileChildTitleCss, ProfileEditFieldGridCss, ProfileTitleAreaCss } from './style'

interface ProfileOptions {
  name: string
  isChildren?: boolean
}

interface RHFProfileFormProps {
  title: string
  desc: string
  hasChildrenOption?: boolean
  hasCancelBtn?: boolean
  isDark?: boolean
}
export default function RHFProfileForm({
  title,
  desc,
  hasChildrenOption,
  hasCancelBtn,
  isDark,
}: RHFProfileFormProps & CssProps) {
  const { t } = useTranslation(['common'])
  const {
    register
  } = useFormContext<ProfileOptions>()
  return <>
    <div css={ProfileTitleAreaCss}>
      <h1>{title}</h1>
      <h3>{desc}</h3>
    </div>
    <div css={ProfileEditFieldGridCss}>
      <ProfileImage.lg
        alt='Profile Sample'
        profile='/netflix/profile/profileImage.png'
      />
      <ConditionalRender.Boolean
        condition={isDark || false}
        render={{
          true: <TextInput.Dark
            {...register('name')}
            label={t('common:form.profile.name.label')}
          />,
          false: <TextInput.Light
            {...register('name')}
            label={t('common:form.profile.name.label')}
          />
        }}
      />
    </div>
    <ConditionalRender.Boolean
      condition={hasChildrenOption || false}
      render={{
        true: <>
          <ConditionalRender.Boolean
            condition={isDark || false}
            render={{
              true: <Divider.Dark />,
              false: <Divider.Light />
            }}
          />
          <div css={ProfileChildrenGridCss}>
            <h1 css={ProfileChildTitleCss}>
              {t('common:form.profile.child.title')}
            </h1>
            <p css={ProfileChildDescCss}>
              {t('common:form.profile.child.desc')}
            </p>
            <div css={ProfileChildSwitchCss}>switch</div>
          </div>
        </>
      }}
    />
    <div css={ProfileBtnAreaGridCss}>
      <button css={[
        DefaultButtonCss,
        ProfileBtnStyleCss
      ]}>
        {t('common:btn.save')}
      </button>
      <ConditionalRender.Boolean
        condition={hasCancelBtn || false}
        render={{
          true: <button css={[
            DefaultButtonCss,
            BlackButtonCss.color,
            BlackButtonCss.interaction.dark,
            ProfileBtnStyleCss
          ]}>
            {t('common:btn.cancel')}
          </button>
        }}
      />
    </div>
  </>
}