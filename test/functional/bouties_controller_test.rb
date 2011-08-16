require 'test_helper'

class BoutiesControllerTest < ActionController::TestCase
  setup do
    @bouty = bouties(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:bouties)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bouty" do
    assert_difference('Bouty.count') do
      post :create, :bouty => @bouty.attributes
    end

    assert_redirected_to bouty_path(assigns(:bouty))
  end

  test "should show bouty" do
    get :show, :id => @bouty.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @bouty.to_param
    assert_response :success
  end

  test "should update bouty" do
    put :update, :id => @bouty.to_param, :bouty => @bouty.attributes
    assert_redirected_to bouty_path(assigns(:bouty))
  end

  test "should destroy bouty" do
    assert_difference('Bouty.count', -1) do
      delete :destroy, :id => @bouty.to_param
    end

    assert_redirected_to bouties_path
  end
end
