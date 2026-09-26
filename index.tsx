import { SafeAreaView } from 'react-native-safe-area-context';

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';

export default function Index() {
  const handleAlertPress = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={['left', 'right', 'bottom']}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>‹</Text>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerSubTitle}>Posts</Text>
          <Text style={styles.headerTitle}>OOTD_EVERYDAY</Text>
        </View>

        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.avatar}
          />

          <View style={styles.userInfo}>
            <Text style={styles.username}>ootd_everyday</Text>
            <Text style={styles.subtext}>via frenchie_fry39</Text>
          </View>

          <Text style={styles.moreIcon}>•••</Text>
        </View>

        {/* Main Post Image */}
        <Image
          source={require('../../assets/images/post.png')}
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* Action Bar */}
        <View style={styles.actionsBar}>
          <View style={styles.leftActions}>
            <Image
              source={require('../../assets/images/heart.png')}
              style={styles.actionImage}
            />

            <Image
              source={require('../../assets/images/comments.png')}
              style={styles.actionImage}
            />

            <Image
              source={require('../../assets/images/share.png')}
              style={styles.actionImage}
            />
          </View>

          <Image
            source={require('../../assets/images/bookmark.png')}
            style={styles.actionImage}
          />
        </View>

        {/* Likes, Caption and Comments */}
        <View style={styles.contentSection}>
          {/* Likes */}
          <View style={styles.likesRow}>
            <Image
              source={require('../../assets/images/profile2.jpg')}
              style={styles.likeAvatar}
            />

            <Text style={styles.likesText}>
              Liked by{' '}
              <Text style={styles.boldText}>paisley.print.48</Text>
              {' '}and{' '}
              <Text style={styles.boldText}>7 others</Text>
            </Text>
          </View>

          {/* Caption */}
          <Text style={styles.captionText}>
            <Text style={styles.boldText}>frenchie_fry39</Text>
            {' '}Fresh shot on a sunny day! ☀️
          </Text>

          {/* Comments */}
          <Text style={styles.viewComments}>
            View all 12 comments
          </Text>

          <Text style={styles.commentText}>
            <Text style={styles.boldText}>lil_wyatt838</Text>
            {' '}Awesome tones
          </Text>

          <Text style={styles.commentText}>
            <Text style={styles.boldText}>pia.in.a.pod</Text>
            {' '}Gorg. Love it! ❤️
          </Text>

          {/* Time */}
          <Text style={styles.timeAgo}>
            1 day ago
          </Text>
        </View>

        {/* Required Alert Button */}
        <Pressable
          onPress={handleAlertPress}
          style={({ pressed }) => [
            styles.alertButton,
            pressed && styles.alertPressed,
          ]}
        >
          <Text style={styles.alertButtonText}>
            Alert
          </Text>
        </Pressable>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Image
          source={require('../../assets/images/home.png')}
          style={styles.navImage}
        />

        <Image
          source={require('../../assets/images/search.png')}
          style={styles.navImage}
        />

        <Image
          source={require('../../assets/images/reels.png')}
          style={styles.navImage}
        />

        <Image
          source={require('../../assets/images/shop.png')}
          style={styles.navImage}
        />

        <Image
          source={require('../../assets/images/profileIcon.png')}
          style={styles.navImage}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* Header */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },

  backArrow: {
    fontSize: 28,
    fontWeight: '300',
  },

  headerTitleContainer: {
    alignItems: 'center',
  },

  headerSubTitle: {
    fontSize: 10,
    color: '#8e8e8e',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  headerTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  spacer: {
    width: 28,
  },

  /* ScrollView */

  scroll: {
    paddingBottom: 20,
  },

  /* Post Header */

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },

  userInfo: {
    flex: 1,
  },

  username: {
    fontWeight: 'bold',
    fontSize: 13,
  },

  subtext: {
    fontSize: 11,
    color: '#666',
  },

  moreIcon: {
    fontSize: 12,
    color: '#262626',
    letterSpacing: 1,
  },

  /* Main Image */

  mainImage: {
    width: '100%',
    height: 420,
    backgroundColor: '#f0f0f0',
  },

  /* Action Bar */

  actionsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  leftActions: {
    flexDirection: 'row',
    gap: 16,
  },

  actionImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  /* Post Content */

  contentSection: {
    paddingHorizontal: 12,
  },

  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  likeAvatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 6,
  },

  likesText: {
    fontSize: 13,
    color: '#262626',
  },

  boldText: {
    fontWeight: 'bold',
  },

  captionText: {
    fontSize: 13,
    color: '#262626',
    marginBottom: 4,
  },

  viewComments: {
    fontSize: 13,
    color: '#8e8e8e',
    marginVertical: 4,
  },

  commentText: {
    fontSize: 13,
    color: '#262626',
    marginTop: 2,
  },

  timeAgo: {
    fontSize: 10,
    color: '#8e8e8e',
    marginTop: 6,
    textTransform: 'uppercase',
  },

  /*Alert Button */

  alertButton: {
    backgroundColor: '#0095f6',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 12,
  },

  alertPressed: {
    opacity: 0.8,
  },

  alertButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  /* Bottom Navigation */

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
    backgroundColor: '#fff',
  },

  navImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});