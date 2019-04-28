import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import CheckBox from '~/components/Checkbox';
import FormInput from '~/components/FormInput';
import GradientBackground from '~/components/GradientBackground';
import Header from '~/components/Header';
import PreferencesActions from '~/store/ducks/preferences';
import UserMeetupsActions from '~/store/ducks/userMeetups';

import {
  Container,
  SectionTitle,
  ImageUploadContainer,
  PictureIcon,
  ButtonContainer,
} from './styles';

const TabIcon = ({ tintColor }) => <Icon name="plus-square" size={20} color={tintColor} />;

class NewMeetup extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    preferences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
      }),
    ).isRequired,
    loadPreferencesRequest: PropTypes.func.isRequired,
    saveNewMeetupRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    title: '',
    description: '',
    date: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
    checkboxItems: {},
  };

  componentWillMount() {
    const { loadPreferencesRequest } = this.props;

    loadPreferencesRequest();
  }

  onItemClick = (itemId) => {
    const { checkboxItems } = this.state;

    if (!Object.keys(checkboxItems).length) {
      const { preferences } = this.props;
      preferences.forEach((item) => {
        checkboxItems[item.id] = { isChecked: false };
      });
    }

    checkboxItems[itemId].isChecked = !checkboxItems[itemId].isChecked;

    this.setState({ checkboxItems });
  };

  saveMeetup = () => {
    const { saveNewMeetupRequest, user } = this.props;
    const {
      title,
      description,
      date,
      street,
      number,
      district,
      city,
      state,
      checkboxItems,
    } = this.state;

    const themes = [];

    Object.keys(checkboxItems).forEach((key) => {
      if (checkboxItems[key].isChecked) {
        themes.push(key);
      }
    });

    const data = {
      title,
      description,
      date,
      owner_id: user.id,
      address: {
        street,
        number: parseInt(number, 10),
        district,
        city,
        state,
      },
      themes,
    };

    saveNewMeetupRequest(data);
  };

  render() {
    const {
      title,
      description,
      date,
      street,
      number,
      district,
      city,
      state,
      checkboxItems,
    } = this.state;
    const { preferences, loading } = this.props;
    return (
      <GradientBackground>
        <Header title="Novo Meetup" />
        <Container>
          <FormInput
            small
            label="Título"
            placeholder="Digite o título do novo meetup"
            value={title}
            onChangeText={text => this.setState({ title: text })}
          />
          <FormInput
            small
            label="Descrição"
            placeholder="Descreva seu meetup"
            value={description}
            onChangeText={text => this.setState({ description: text })}
            multiline
            numberOfLines={4}
          />
          <FormInput
            small
            label="Data"
            placeholder="2019-04-30"
            value={date}
            onChangeText={text => this.setState({ date: text })}
          />

          <SectionTitle>Imagem de capa</SectionTitle>
          <ImageUploadContainer>
            <PictureIcon name="camera" size={20} />
          </ImageUploadContainer>

          <SectionTitle>Localização</SectionTitle>
          <FormInput
            small
            label="Rua"
            placeholder="Rua"
            value={street}
            onChangeText={text => this.setState({ street: text })}
          />
          <FormInput
            small
            label="Número"
            placeholder="Número da rua"
            value={number}
            onChangeText={text => this.setState({ number: text })}
          />
          <FormInput
            small
            label="Bairro"
            placeholder="Bairro"
            value={district}
            onChangeText={text => this.setState({ district: text })}
          />
          <FormInput
            small
            label="Cidade"
            placeholder="Cidade"
            value={city}
            onChangeText={text => this.setState({ city: text })}
          />
          <FormInput
            small
            label="Estado"
            placeholder="Estado"
            value={state}
            onChangeText={text => this.setState({ state: text })}
          />

          <SectionTitle>Temas abordados</SectionTitle>
          <CheckBox
            items={preferences}
            checkboxItems={checkboxItems}
            onItemClick={this.onItemClick}
          />

          <ButtonContainer>
            <Button onPress={this.saveMeetup} loading={loading}>
              Salvar
            </Button>
          </ButtonContainer>
        </Container>
      </GradientBackground>
    );
  }
}

const mapStateToProps = state => ({
  preferences: state.preferences.data,
  user: state.user.data,
  loading: state.userMeetups.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...PreferencesActions,
    ...UserMeetupsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMeetup);
